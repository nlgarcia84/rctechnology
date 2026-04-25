document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form') as HTMLFormElement | null;
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = (
      document.getElementById('name') as HTMLInputElement
    ).value.trim();
    const surname = (
      document.getElementById('surname') as HTMLInputElement
    ).value.trim();
    const email = (
      document.getElementById('email') as HTMLInputElement
    ).value.trim();
    const message = (
      document.getElementById('message') as HTMLTextAreaElement
    ).value.trim();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, surname, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || 'Error del servidor');
        return;
      }

      alert('Mensaje enviado correctamente ✔');
      form.reset();
    } catch (err) {
      alert('Error de red');
    }
  });
});
