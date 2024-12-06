# app/models.py

from django.db import models

class ReferenceMaterial(models.Model):
    ROLE_CHOICES = [
        ('Coach', 'Coach'),
        ('Director', 'Director'),
        # Add more roles as needed
    ]

    AGE_GROUP_CHOICES = [
        ('Under 10', 'Under 10'),
        ('Under 12', 'Under 12'),
        ('Under 14', 'Under 14'),
        ('Under 16', 'Under 16'),
        # Add more age groups as needed
    ]

    role = models.CharField(max_length=50, choices=ROLE_CHOICES)
    age_group = models.CharField(max_length=20, choices=AGE_GROUP_CHOICES)
    topic = models.CharField(max_length=150)
    content = models.TextField()

    def __str__(self):
        return f"{self.role} - {self.age_group} - {self.topic}"
