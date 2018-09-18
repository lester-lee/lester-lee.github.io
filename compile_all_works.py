import os, yaml

data_dir = "_data/works/"


all_works = []

for fname in os.listdir(data_dir):
    gallery = fname.split(".")[0]
    with open(data_dir+fname) as f:
        works = yaml.load(f)
        if works:
            for w in works:
                w["gallery"] = gallery
            all_works += works

yaml.dump(all_works, open("_data/all_works.yml", "w"))
