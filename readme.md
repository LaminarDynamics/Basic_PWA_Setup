# Basic PWA Example
Basic PWA to show the how to cache data and work offline. 
Some items could probably be re-foldered for better organization.

# Important notes on .HTML page:
* Be sure to link proper items in HTML like ServiceWorker, Manifest, and Apple Icon crap
* Call service worker from HTML JavaScript

# Important notes on SW.js page:
* Renaming cache_name allows for content updates
* Make sure to include ALL dependencies including sw.js in assets array
* Make SURE assets in array are spelled and foldered correctly
* caches.delete(cache_name); can be used to clear cache

# Important notes on Manifest.json:
* Include "purpose: any/maskable" for background transparency on some devices
* Start_url is required