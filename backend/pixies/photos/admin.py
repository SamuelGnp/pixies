from django.contrib import admin
from pixies.photos.models import Photo
import arrow

class PhotosAdmin(admin.ModelAdmin):
    model = Photo

    def created(self, obj):
        return arrow.get(obj.created_at).humanize()

    def updated(self, obj):
        return arrow.get(obj.updated_at).humanize()

    list_display = (
        "caption",
        "details",
        "created_at",
        "updated_at",
        "url",
    )

admin.site.register(Photo, PhotosAdmin)