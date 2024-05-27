const form = document.getElementById('os-form');
const osInput = document.getElementById('os-input');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const os = osInput.value;
  const discordWebhookUrl = 'https://discord.com/api/webhooks/your_webhook_id/your_webhook_token';

  const data = {
    content: `A user has submitted their OS: ${os}`
  };

  try {
    const response = await fetch(discordWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      console.log('OS data sent to Discord successfully');
      osInput.value = '';
    } else {
      console.error('Failed to send OS data to Discord');
    }
  } catch (error) {
    console.error('Error sending OS data to Discord:', error);
  }
});
