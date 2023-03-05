import matplotlib.pyplot as plt
import pandas as pd

pd = pd.read_csv('graph.csv', sep='\t')
pd.plot('wait' )

pd.plot(y='wait',color='green')
plt.show()
