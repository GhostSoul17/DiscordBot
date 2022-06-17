import sys
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import BernoulliNB

phrase = sys.argv[1]
data = pd.read_json("Sarcasm.json", lines=True)
data = data[["headline", "is_sarcastic"]]
x = np.array(data["headline"])
y = np.array(data["is_sarcastic"])
cv = CountVectorizer()
X = cv.fit_transform(x) # Fit the Data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, random_state=42)
model = BernoulliNB()
model.fit(X_train, y_train)
data = cv.transform().toarray()
output = model.predict(data)
print(output)