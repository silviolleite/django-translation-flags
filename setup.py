import os
from builtins import RuntimeError

from setuptools import find_packages, setup

short_description = 'Internationalization with flags of main languages, ' \
                    'It lets easy to integrate the Django i18n in yours templates'

# noinspection PyBroadException
try:
    # noinspection PyPackageRequirements
    import pypandoc

    long_description = pypandoc.convert('README.md', 'rst')
except RuntimeError:
    long_description = short_description

# allow setup.py to be run from any path
os.chdir(os.path.normpath(os.path.join(os.path.abspath(__file__), os.pardir)))

setup(
    name='django-translation-flags',
    version='1.0.3',
    packages=find_packages(),
    include_package_data=True,
    license='MIT License',
    description=short_description,
    long_description=long_description,
    url='http://github.com/silviolleite/django-translation-flags',
    author='Silvio Luis Leite',
    author_email='silviolleite@gmail.com',
    classifiers=[
        'Environment :: Web Environment',
        'Framework :: Django',
        'Framework :: Django :: 2.1',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Topic :: Software Development :: Libraries',
        'Topic :: Internet :: WWW/HTTP',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
    ],
)
