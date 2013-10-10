# Create your views here.
from django.shortcuts import render_to_response
from django.shortcuts import redirect

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[-1].strip()
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip

def classificacao(request):
	ip = get_client_ip(request)
	return render_to_response('_base.html',{'template': 'classificacao.html', 'ip': ip})	
	
def rodada_1(request):
	return render_to_response('_base.html',{'template': 'rodada_1/rodada_1.html',})				
	
def phone_jogo_1(request):
	return render_to_response('_base.html',{'template': 'rodada_1/phone_jogo_1.html',})			

def phone_jogo_2(request):
	return render_to_response('_base.html',{'template': 'rodada_1/phone_jogo_2.html',})	