import googleapiclient.discovery
from collections import Counter
import json

# Step 1: Fetch comments from YouTube
def fetch_comments(video_id, api_key):
    youtube = googleapiclient.discovery.build("youtube", "v3", developerKey=api_key)
    comments = []
    request = youtube.commentThreads().list(
        part="snippet",
        videoId=video_id,
        maxResults=100,
        textFormat="plainText"
    )
    response = request.execute()

    for item in response['items']:
        comment = item['snippet']['topLevelComment']['snippet']['textDisplay']
        comments.append(comment)

    return comments

# Step 2: Count occurrences of names in comments
def count_names(comments, names):
    name_count = Counter()
    for comment in comments:
        for name in names:
            if name.lower() in comment.lower():
                name_count[name] += 1
    return name_count

# Step 3: Save the results as a JSON file
def save_results_to_json(results, filename="test.json"):
    with open(filename, "w") as outfile:
        json.dump(results, outfile)

# Example usage
api_key = 'AIzaSyD7TvluXxBX_VJgZye8R328LJgbGNgiEXE'
video_id = 'wNOs7NfV8o0'
names = ['NAFO', 'Alex', 'Fellas']  # Specify the possible names

comments = fetch_comments(video_id, api_key)
name_counts = count_names(comments, names)
save_results_to_json(name_counts)
