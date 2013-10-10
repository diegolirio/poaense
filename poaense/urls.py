from django.conf.urls import patterns, include, url
from django.conf import settings

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'poaense.views.home', name='home'),
	url(r'^classificacao/$', 'core.views.classificacao', name='classificacao'),
	url(r'^rodada_1/$', 'core.views.rodada_1', name='rodada_1'),
	url(r'^rodada_1/phone_jogo_1/$', 'core.views.phone_jogo_1', name='phone_jogo_1'),
	url(r'^rodada_1/phone_jogo_2/$', 'core.views.phone_jogo_2', name='phone_jogo_2'),
    # url(r'^poaense/', include('poaense.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)

if settings.DEBUG:
	urlpatterns += patterns('', 
	                        (r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
    )
