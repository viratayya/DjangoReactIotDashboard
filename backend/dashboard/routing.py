from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
import streaming.routing

# WebSocket urls with authentication
application = ProtocolTypeRouter({
    # (http->django views is added by default)
    'websocket': AuthMiddlewareStack(
        URLRouter(
            streaming.routing.websocket_urlpatterns
        )
    ),
})