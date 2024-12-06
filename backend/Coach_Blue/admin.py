# app/admin.py

from django.contrib import admin
from .models import ReferenceMaterial

@admin.register(ReferenceMaterial)
class ReferenceMaterialAdmin(admin.ModelAdmin):
    list_display = ('role', 'age_group', 'topic')
    list_filter = ('role', 'age_group')
    search_fields = ('topic', 'content')
