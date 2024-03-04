export async function fetchData() {
    try {
      const response = await fetch('http://localhost:8081/api/cards');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  