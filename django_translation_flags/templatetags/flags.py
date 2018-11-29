from django import template

register = template.Library()


@register.inclusion_tag('languages.html')
def languages(flag_type='', **kwargs):
    """
    Templatetag languages

    :param flag_type: Default empty, It acepts the string 'square'
    :param kwargs: Classes to HTML tags
    :return: A dict with classes
    """
    if flag_type == 'square':
        flag_type = 'flag-icon-square'
    default = dict(li_class='', a_class='')
    classes = dict(default, **kwargs)
    return {
        'icon_class': flag_type,
        'classes': classes,
    }