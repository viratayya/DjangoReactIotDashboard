from django.apps import AppConfig


class CollectorConfig(AppConfig):
    name = 'collector'

    def ready(self):
        import collector.signals
