from django.contrib import admin
from food.models import *


class blogAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ["title"]}


admin.site.register(category)
admin.site.register(blog, blogAdmin)
