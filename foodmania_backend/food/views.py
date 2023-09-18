from .serializers import CategorySerializer,blogSerializer
from food.models import blog,category
from rest_framework.views import APIView
from rest_framework.response import Response


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
        blogs_data=blog.objects.filter(postlabel__iexact=popular)  
        serializer_data= blogSerializer(blogs_data,many=True)
        return Response(serializer_data.data)  
    
