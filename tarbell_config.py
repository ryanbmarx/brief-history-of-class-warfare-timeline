# -*- coding: utf-8 -*-

"""
Tarbell project configuration
"""

# Short project name
NAME = "history-of-class-warfare"

# Descriptive title of project
TITLE = "A brief history of class warfare"

# Google spreadsheet key
SPREADSHEET_KEY = "1L3Jqgl5GNf-azV9eUQM9JLLkwq6mIDhigXX7K9cbR0c"

# Exclude these files from publication
EXCLUDES = ["*.md", "requirements.txt"]

# Create JSON data at ./data.json, disabled by default
# CREATE_JSON = True

# S3 bucket configuration
S3_BUCKETS = {
    # Provide target -> s3 url pairs, such as:
    #     "mytarget": "mys3url.bucket.url/some/path"
    # then use tarbell publish mytarget to publish to it
    "production": "graphics.chicagotribune.com/news/local/history-of-class-warfare",
    "staging": "graphics.beta.tribapps.com/history-of-class-warfare",
}

# Default template variables
DEFAULT_CONTEXT = {
    'name': 'history-of-class-warfare',
    'title': 'A brief history of class warfare'
}