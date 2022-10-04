from rest_framework import serializers

from pixies.photos.models import Photo

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ["id", "url", "caption", "details"]
        model = Photo