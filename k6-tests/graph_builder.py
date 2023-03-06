import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.ticker as ticker


df = pd.read_csv('data.csv', parse_dates=True, index_col='timestamp', sep=",")
df.plot(y='metric_value',color='green')
plt.show()
