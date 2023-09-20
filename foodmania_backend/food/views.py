from .serializers import CategorySerializer,blogSerializer
from food.models import blog,category
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class BlogView(APIView):
    def get(self,request,pk=None):
        if pk==None: 
            blogs_data=blog.objects.all()
            serializer_data= blogSerializer(blogs_data,many=True)
            return Response(serializer_data.data)
        else:
            blog_data=blog.objects.get(pk=pk)
            serializer_data= blogSerializer(blog_data)
            return Response(serializer_data.data)
    def get(self, request, slug=None):  # Use the custom lookup field as a parameter
        if slug is None:
            blogs_data = blog.objects.all()
            serializer_data = blogSerializer(blogs_data, many=True)
            return Response(serializer_data.data)
        else:
            try:
                blog_data = blog.objects.get(slug=slug)  # Use the custom lookup field in the query
                serializer_data = blogSerializer(blog_data)
                return Response(serializer_data.data)
            except blog.DoesNotExist:
                return Response(
                    {"error": "Blog not found"},
                    status=status.HTTP_404_NOT_FOUND
                )    

class CategoryView(APIView):
    def get(self,request,pk=None):
        if pk==None:
            categories_data= category.objects.all()
            serializer_data= CategorySerializer(categories_data,many=True)
            return Response(serializer_data.data)  
        else:
            category_data= category.objects.get(pk=pk)
            serializer_data=CategorySerializer(category_data)
            return Response(serializer_data.data)   
           
class categoryBasedBlog(APIView):
    def get(self,request,pk):
        blogs_data=blog.objects.filter(category=pk)
        serializer_data=blogSerializer(blogs_data,many=True)
        return Response(serializer_data.data)
    
class categoryBasedPopularBlog(APIView):
    def get(self,request,popular):
        blogs_data=blog.objects.filter(postlabel__iexact=popular).order_by('-id')[0:4]  
        serializer_data= blogSerializer(blogs_data,many=True)
        return Response(serializer_data.data)  
    
