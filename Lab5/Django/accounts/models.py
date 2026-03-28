from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)   # later you’ll want to hash this
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=10)