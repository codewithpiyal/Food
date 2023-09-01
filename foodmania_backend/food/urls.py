from django.urls import path, include
from .views import blogApiView, categoryApiView, CategoryPostApiView, PopularPostApiView
from rest_framework import routers

router = routers.SimpleRouter()
router.register("blog", blogApiView, basename="blogs")
router.register("category", categoryApiView, basename="category")
router.register(
    "categoryBasedBlogs", CategoryPostApiView, basename="categoryBasedBlogs"
)
router.register("popularBasedBlogs", PopularPostApiView, basename="popularBasedBlogs")

urlpatterns = [path("", include(router.urls))]
