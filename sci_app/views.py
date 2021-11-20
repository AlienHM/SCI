from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
from django.http import HttpResponse, JsonResponse


@csrf_exempt
def index(request):
    json_to_response = dict()

    # response = JsonResponse(json_to_response)
    
    return render(request, "sci_app/templates/index.html", json_to_response)