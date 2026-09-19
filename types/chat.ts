export type MessageRole = "user" | "assistant" | "system";

export type SuggestedActionType = "link" | "query" | "call" | "whatsapp";

export interface SuggestedAction {
  label: string;
  href?: string;
  actionType?: SuggestedActionType;
  payload?: string;
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: number;
  suggestedActions?: SuggestedAction[];
  isError?: boolean;
}

export interface QuickPrompt {
  id: string;
  label: string;
  query: string;
  category?: "funding" | "compliance" | "it" | "general";
}

export interface ChatRequestPayload {
  messages: Array<{
    role: "user" | "assistant";
    content: string;
  }>;
}

export interface ChatResponsePayload {
  reply: string;
  suggestedActions?: SuggestedAction[];
  error?: string;
}
