// Function to update goal icon using PUT request

export async function updateGoalIcon(goalId, icon) {
  const response = await fetch(`/api/goals/${goalId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      icon: icon
    })
  });

  return response.json();
}

// Emoji click handler
export function pickEmojiOnClick(goalId, emoji) {
  return updateGoalIcon(goalId, emoji);
}