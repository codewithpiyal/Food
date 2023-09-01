# Generated by Django 4.2.3 on 2023-08-31 08:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('slug', models.SlugField(max_length=150)),
                ('excerpt', models.CharField(default='', max_length=150)),
                ('content', models.TextField(blank=True, null=True)),
                ('contentTwo', models.TextField(blank=True, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='pics')),
                ('ingredients', models.TextField(blank=True, null=True)),
                ('postlabel', models.CharField(blank=True, choices=[('Popular', 'popular')], max_length=100)),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='food.category')),
            ],
        ),
    ]
