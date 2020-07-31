from django.shortcuts import render


def metro_render(request, page_name, resp):
    metro_params = {'page': page_name, 'resp': resp}
    return render(request, 'react-base.html', metro_params)
