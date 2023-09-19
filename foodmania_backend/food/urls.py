from django.urls import path  
from .views import BlogView,CategoryView,categoryBasedBlog,categoryBasedPopularBlog

urlpatterns = [
    path('blogs/', BlogView.as_view(),name='blogs'),
    path('blogs/<int:pk>/',BlogView.as_view(),name='blog'),
    path('blogs/<str:slug>/',BlogView.as_view(),name='blog'),
    path('categories/',CategoryView.as_view(),name='categories'),
    path('categories/<int:pk>/',CategoryView.as_view(),name='category'),
    path('categoriesbasedblog/<int:pk>/',categoryBasedBlog.as_view(),name='categorybasedblog'),
    path('categoriesbasedpopularblog/<str:popular>/',categoryBasedPopularBlog.as_view(),name='categorybasedpopularblog'),

]

