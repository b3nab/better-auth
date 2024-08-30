import { UnionToIntersection } from "../types/helper";
import { BetterAuth } from "../auth";
import { BetterFetchOption } from "@better-fetch/fetch";
import type { useAuthStore as reactStore } from "./react";
import type { useAuthStore as vueStore } from "./vue";

export type AuthStore = typeof reactStore | typeof vueStore;
export interface ClientOptions extends BetterFetchOption {
	/**
	 * csrf plugin is enabled by default
	 */
	csrfPlugin?: boolean;
}

export type HasPlugin<
	PluginId extends string,
	Auth extends BetterAuth,
> = Auth["options"]["plugins"] extends Array<infer T>
	? UnionToIntersection<T extends { id: PluginId } ? true : false>
	: false;
