/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as OpikApi from "../index";

export interface AssistantMessage {
    role?: OpikApi.AssistantMessageRole;
    content?: string;
    name?: string;
    toolCalls?: OpikApi.ToolCall[];
    refusal?: boolean;
    functionCall?: OpikApi.FunctionCall;
}
