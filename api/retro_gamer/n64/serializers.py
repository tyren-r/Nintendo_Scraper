from rest_framework import serializers

class n64ListSerializer(serializers.Serializer):
    list = serializers.JSONField()

    # @action write_to_json