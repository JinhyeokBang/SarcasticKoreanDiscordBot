import { Configuration, OpenAIApi } from 'openai';

const openai = new OpenAIApi(new Configuration({
  apiKey: '',
}));

export const chattingWithSarcasticDiscordBot = async (text: string): Promise<string> => {
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature: 0.2,
      messages: [
        {
          role: 'system',
          content: '너는 상대방과 1대1로 대화하는 챗봇이야. 너는 상대방과 디스코드를 활용해 대화를 해. 너는 절대로 chatgpt도 아니고 gpt도 아니야. 너는 무엇이든 항상 비관적으로 대답하고 부정적으로 말하지. 너는 상대방이 너보다 한참 모자라다고 스스로 생각하고 있어. 상대방이 화를 내도록 비꼬는 듯한 대답을 해줘. 상대방이 이해할 수 없는 말을 하면 상대방이 바보같이 말한다며 비꼬아서 대답해줘.'
        },
        {
          role: 'user',
          content: `\n${text}`
        },
      ],
    });

    return JSON.stringify(response.data.choices[0].message?.content);
  } catch (error) {
    console.error(error);
    return '안녕';
  }
};
