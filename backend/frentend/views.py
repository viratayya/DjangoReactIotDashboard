from django.shortcuts import render

# Create your views here.
def index(request):
    """
    Index page
    """
    return render(request, 'frentend/index.html', {})