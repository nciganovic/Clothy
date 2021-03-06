# Generated by Django 2.2.7 on 2019-12-12 12:42

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import django_mysql.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('main', '0002_auto_20191212_1342'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_name', models.CharField(choices=[('Man', 'Man'), ('Woman', 'Woman'), ('Kids', 'Kids')], max_length=50)),
                ('description', models.CharField(max_length=500)),
                ('category_slug', models.SlugField()),
            ],
            options={
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=500)),
                ('size', django_mysql.models.ListCharField(models.CharField(max_length=3), max_length=24, size=6)),
                ('price', models.DecimalField(decimal_places=2, max_digits=6)),
                ('date', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date published')),
                ('product_slug', models.SlugField()),
                ('category_name', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='main.Category')),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_1', models.ImageField(default=None, upload_to='product_images')),
                ('image_2', models.ImageField(default=None, upload_to='product_images')),
                ('image_3', models.ImageField(default=None, upload_to='product_images')),
                ('name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.Product')),
            ],
        ),
        migrations.CreateModel(
            name='FeaturedProduct',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.Product')),
            ],
        ),
    ]
