# Create your views here.
from django.shortcuts import render_to_response
from django.shortcuts import redirect

def classificacao(request):
	return render_to_response('_base.html',{'template': 'classificacao.html',})	
	
def rodada_1(request):
	return render_to_response('_base.html',{'template': 'rodada_1/rodada_1.html',})				
	
def phone_jogo_1(request):
	return render_to_response('_base.html',{'template': 'rodada_1/phone_jogo_1.html',})			

def phone_jogo_2(request):
	return render_to_response('_base.html',{'template': 'rodada_1/phone_jogo_2.html',})	