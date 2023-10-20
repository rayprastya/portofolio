from django.db import models
from django.contrib.auth.models import AbstractBaseUser
# Create your models here.

class User(AbstractBaseUser):
    name = models.CharField(max_length=200)
    address = models.TextField()
    dob = models.DateField()
    email = models.CharField(max_length=200)
    phone_num = models.CharField(max_length=200)

class File(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    file_name = models.CharField(max_length=200)
    summary = models.CharField(max_length=100)
    topic = models.CharField()