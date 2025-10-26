import { ref, onMounted } from 'vue';
export function useFetch(url) {
    const data = ref(null);
    onMounted(async () => {
        try {
            const res = await fetch(url);
            data.value = await res.json();
        }
        catch (err) {
            console.error('Fetch error:', err);
        }
    });
    return { data };
}
