from django.db import models


class category(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to="pics", null=True, blank=True)

    def __str__(self) -> str:
        return self.name


class blog(models.Model):
    POST_CHOICES = [("Popular", "popular")]
    category = models.ForeignKey(category, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=150)
    excerpt = models.CharField(max_length=150, default="")
    content = models.TextField(null=True, blank=True)
    contentTwo = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to="pics", null=True, blank=True)
    ingredients = models.TextField(null=True, blank=True)
    postlabel = models.CharField(max_length=100, choices=POST_CHOICES, blank=True)

    def __str__(self) -> str:
        return self.title
