# Create your views here.
from django.shortcuts import render_to_response
from django.shortcuts import redirect

def classificacao(request):
	return render_to_response('_base.html',{'template': 'classificacao.html',})	
	
def jogo_1(request):
	return render_to_response('_base.html',{'template': 'jogo_1.html',})			
