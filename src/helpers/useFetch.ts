import { ref, onMounted } from 'vue';

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null);

  onMounted(async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.statusText);
      data.value = await res.json();
    } catch (err) {
      console.error('Fetch error:', err);
    }
  });

  return { data };
}
