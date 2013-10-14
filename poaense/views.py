from django.shortcuts import render_to_response
from django.shortcuts import redirect

def home(request):
	return redirect('/classificacao/0')