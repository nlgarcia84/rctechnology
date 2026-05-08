import { e as createActionsProxy, p as pipelineSymbol, A as AstroError, f as ActionCalledFromServerError } from './entrypoint_g7PPwlsS.mjs';
import { createClient } from '@supabase/supabase-js';

const actions = createActionsProxy({
  handleAction: async (param, path, context) => {
    const pipeline = context ? Reflect.get(context, pipelineSymbol) : void 0;
    if (!pipeline) {
      throw new AstroError(ActionCalledFromServerError);
    }
    const action = await pipeline.getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
});

const supabaseUrl = "https://eldiiqdobtkeakkgwwdf.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsZGlpcWRvYnRrZWFra2d3d2RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwMTEzOTUsImV4cCI6MjA5MjU4NzM5NX0.zYGbWt38SGqOQwSt5O4i3vO9DYpoCZ6ZzkHRDqYTWsg";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { actions as a, supabase as s };
