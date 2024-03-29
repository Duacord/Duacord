
// DO NOT EDIT THIS FILE
// It is automatically generated by running "bun run apidata"

import APIFetch from "../Util/APIFetch"

class API {
    constructor(Token) {
        this.Token = Token
    }

    async Fetch(Path, Method, Body, Parameters) {
        return await APIFetch(this.Token, Path, Method, Body, Parameters)
    }

    async get_my_oauth2_application(Parameters) {
        return await this.Fetch("/oauth2/applications/@me", "get", {}, Parameters)
    }
    
    async list_my_connections(Parameters) {
        return await this.Fetch("/users/@me/connections", "get", {}, Parameters)
    }
    
    async create_dm(Body, Parameters) {
        return await this.Fetch("/users/@me/channels", "post", Body, Parameters)
    }
    
    async list_my_guilds(Parameters) {
        return await this.Fetch("/users/@me/guilds", "get", {}, Parameters)
    }
    
    async get_my_application(Parameters) {
        return await this.Fetch("/applications/@me", "get", {}, Parameters)
    }
    
    async update_my_application(Body, Parameters) {
        return await this.Fetch("/applications/@me", "patch", Body, Parameters)
    }
    
    async get_bot_gateway(Parameters) {
        return await this.Fetch("/gateway/bot", "get", {}, Parameters)
    }
    
    async get_my_oauth2_authorization(Parameters) {
        return await this.Fetch("/oauth2/@me", "get", {}, Parameters)
    }
    
    async list_voice_regions(Parameters) {
        return await this.Fetch("/voice/regions", "get", {}, Parameters)
    }
    
    async get_my_user(Parameters) {
        return await this.Fetch("/users/@me", "get", {}, Parameters)
    }
    
    async update_my_user(Body, Parameters) {
        return await this.Fetch("/users/@me", "patch", Body, Parameters)
    }
    
    async create_stage_instance(Body, Parameters) {
        return await this.Fetch("/stage-instances", "post", Body, Parameters)
    }
    
    async list_sticker_packs(Parameters) {
        return await this.Fetch("/sticker-packs", "get", {}, Parameters)
    }
    
    async get_gateway(Parameters) {
        return await this.Fetch("/gateway", "get", {}, Parameters)
    }
    
    async create_guild(Body, Parameters) {
        return await this.Fetch("/guilds", "post", Body, Parameters)
    }
    
    async list_my_private_archived_threads(Parameters) {
        return await this.Fetch("/channels/{channel_id}/users/@me/threads/archived/private", "get", {}, Parameters)
    }
    
    async list_guild_application_command_permissions(Parameters) {
        return await this.Fetch("/applications/{application_id}/guilds/{guild_id}/commands/permissions", "get", {}, Parameters)
    }
    
    async get_guild_application_command_permissions(Parameters) {
        return await this.Fetch("/applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions", "get", {}, Parameters)
    }
    
    async set_guild_application_command_permissions(Body, Parameters) {
        return await this.Fetch("/applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions", "put", Body, Parameters)
    }
    
    async add_my_message_reaction(Body, Parameters) {
        return await this.Fetch("/channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me", "put", Body, Parameters)
    }
    
    async delete_my_message_reaction(Parameters) {
        return await this.Fetch("/channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me", "delete", {}, Parameters)
    }
    
    async list_private_archived_threads(Parameters) {
        return await this.Fetch("/channels/{channel_id}/threads/archived/private", "get", {}, Parameters)
    }
    
    async list_public_archived_threads(Parameters) {
        return await this.Fetch("/channels/{channel_id}/threads/archived/public", "get", {}, Parameters)
    }
    
    async get_application_user_role_connection(Parameters) {
        return await this.Fetch("/users/@me/applications/{application_id}/role-connection", "get", {}, Parameters)
    }
    
    async update_application_user_role_connection(Body, Parameters) {
        return await this.Fetch("/users/@me/applications/{application_id}/role-connection", "put", Body, Parameters)
    }
    
    async get_my_guild_member(Parameters) {
        return await this.Fetch("/users/@me/guilds/{guild_id}/member", "get", {}, Parameters)
    }
    
    async get_application_role_connections_metadata(Parameters) {
        return await this.Fetch("/applications/{application_id}/role-connections/metadata", "get", {}, Parameters)
    }
    
    async update_application_role_connections_metadata(Body, Parameters) {
        return await this.Fetch("/applications/{application_id}/role-connections/metadata", "put", Body, Parameters)
    }
    
    async get_guild_application_command(Parameters) {
        return await this.Fetch("/applications/{application_id}/guilds/{guild_id}/commands/{command_id}", "get", {}, Parameters)
    }
    
    async delete_guild_application_command(Parameters) {
        return await this.Fetch("/applications/{application_id}/guilds/{guild_id}/commands/{command_id}", "delete", {}, Parameters)
    }
    
    async update_guild_application_command(Body, Parameters) {
        return await this.Fetch("/applications/{application_id}/guilds/{guild_id}/commands/{command_id}", "patch", Body, Parameters)
    }
    
    async list_guild_application_commands(Parameters) {
        return await this.Fetch("/applications/{application_id}/guilds/{guild_id}/commands", "get", {}, Parameters)
    }
    
    async bulk_set_guild_application_commands(Body, Parameters) {
        return await this.Fetch("/applications/{application_id}/guilds/{guild_id}/commands", "put", Body, Parameters)
    }
    
    async create_guild_application_command(Body, Parameters) {
        return await this.Fetch("/applications/{application_id}/guilds/{guild_id}/commands", "post", Body, Parameters)
    }
    
    async join_thread(Body, Parameters) {
        return await this.Fetch("/channels/{channel_id}/thread-members/@me", "put", Body, Parameters)
    }
    
    async leave_thread(Parameters) {
        return await this.Fetch("/channels/{channel_id}/thread-members/@me", "delete", {}, Parameters)
    }
    
    async bulk_delete_messages(Body, Parameters) {
        return await this.Fetch("/channels/{channel_id}/messages/bulk-delete", "post", Body, Parameters)
    }
    
    async delete_user_message_reaction(Parameters) {
        return await this.Fetch("/channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}", "delete", {}, Parameters)
    }
    
    async list_message_reactions_by_emoji(Parameters) {
        return await this.Fetch("/channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}", "get", {}, Parameters)
    }
    
    async delete_all_message_reactions_by_emoji(Parameters) {
        return await this.Fetch("/channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}", "delete", {}, Parameters)
    }
    
    async delete_all_message_reactions(Parameters) {
        return await this.Fetch("/channels/{channel_id}/messages/{message_id}/reactions", "delete", {}, Parameters)
    }
    
    async crosspost_message(Body, Parameters) {
        return await this.Fetch("/channels/{channel_id}/messages/{message_id}/crosspost", "post", Body, Parameters)
    }
    
    async create_thread_from_message(Body, Parameters) {
        return await this.Fetch("/channels/{channel_id}/messages/{message_id}/threads", "post", Body, Parameters)
    }
    
    async get_original_webhook_message(Parameters) {
        return await this.Fetch("/webhooks/{webhook_id}/{webhook_token}/messages/@original", "get", {}, Parameters)
    }
    
    async delete_original_webhook_message(Parameters) {
        return await this.Fetch("/webhooks/{webhook_id}/{webhook_token}/messages/@original", "delete", {}, Parameters)
    }
    
    async update_original_webhook_message(Body, Parameters) {
        return await this.Fetch("/webhooks/{webhook_id}/{webhook_token}/messages/@original", "patch", Body, Parameters)
    }
    
    async list_guild_scheduled_event_users(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users", "get", {}, Parameters)
    }
    
    async get_auto_moderation_rule(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/auto-moderation/rules/{rule_id}", "get", {}, Parameters)
    }
    
    async delete_auto_moderation_rule(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/auto-moderation/rules/{rule_id}", "delete", {}, Parameters)
    }
    
    async update_auto_moderation_rule(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/auto-moderation/rules/{rule_id}", "patch", Body, Parameters)
    }
    
    async list_auto_moderation_rules(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/auto-moderation/rules", "get", {}, Parameters)
    }
    
    async create_auto_moderation_rule(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/auto-moderation/rules", "post", Body, Parameters)
    }
    
    async update_self_voice_state(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/voice-states/@me", "patch", Body, Parameters)
    }
    
    async search_guild_members(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/members/search", "get", {}, Parameters)
    }
    
    async get_active_guild_threads(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/threads/active", "get", {}, Parameters)
    }
    
    async update_my_guild_member(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/members/@me", "patch", Body, Parameters)
    }
    
    async add_guild_member_role(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/members/{user_id}/roles/{role_id}", "put", Body, Parameters)
    }
    
    async delete_guild_member_role(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/members/{user_id}/roles/{role_id}", "delete", {}, Parameters)
    }
    
    async leave_guild(Parameters) {
        return await this.Fetch("/users/@me/guilds/{guild_id}", "delete", {}, Parameters)
    }
    
    async get_application_command(Parameters) {
        return await this.Fetch("/applications/{application_id}/commands/{command_id}", "get", {}, Parameters)
    }
    
    async delete_application_command(Parameters) {
        return await this.Fetch("/applications/{application_id}/commands/{command_id}", "delete", {}, Parameters)
    }
    
    async update_application_command(Body, Parameters) {
        return await this.Fetch("/applications/{application_id}/commands/{command_id}", "patch", Body, Parameters)
    }
    
    async list_application_commands(Parameters) {
        return await this.Fetch("/applications/{application_id}/commands", "get", {}, Parameters)
    }
    
    async bulk_set_application_commands(Body, Parameters) {
        return await this.Fetch("/applications/{application_id}/commands", "put", Body, Parameters)
    }
    
    async create_application_command(Body, Parameters) {
        return await this.Fetch("/applications/{application_id}/commands", "post", Body, Parameters)
    }
    
    async create_interaction_response(Body, Parameters) {
        return await this.Fetch("/interactions/{interaction_id}/{interaction_token}/callback", "post", Body, Parameters)
    }
    
    async get_thread_member(Parameters) {
        return await this.Fetch("/channels/{channel_id}/thread-members/{user_id}", "get", {}, Parameters)
    }
    
    async add_thread_member(Body, Parameters) {
        return await this.Fetch("/channels/{channel_id}/thread-members/{user_id}", "put", Body, Parameters)
    }
    
    async delete_thread_member(Parameters) {
        return await this.Fetch("/channels/{channel_id}/thread-members/{user_id}", "delete", {}, Parameters)
    }
    
    async list_thread_members(Parameters) {
        return await this.Fetch("/channels/{channel_id}/thread-members", "get", {}, Parameters)
    }
    
    async set_channel_permission_overwrite(Body, Parameters) {
        return await this.Fetch("/channels/{channel_id}/permissions/{overwrite_id}", "put", Body, Parameters)
    }
    
    async delete_channel_permission_overwrite(Parameters) {
        return await this.Fetch("/channels/{channel_id}/permissions/{overwrite_id}", "delete", {}, Parameters)
    }
    
    async add_group_dm_user(Body, Parameters) {
        return await this.Fetch("/channels/{channel_id}/recipients/{user_id}", "put", Body, Parameters)
    }
    
    async delete_group_dm_user(Parameters) {
        return await this.Fetch("/channels/{channel_id}/recipients/{user_id}", "delete", {}, Parameters)
    }
    
    async follow_channel(Body, Parameters) {
        return await this.Fetch("/channels/{channel_id}/followers", "post", Body, Parameters)
    }
    
    async get_message(Parameters) {
        return await this.Fetch("/channels/{channel_id}/messages/{message_id}", "get", {}, Parameters)
    }
    
    async delete_message(Parameters) {
        return await this.Fetch("/channels/{channel_id}/messages/{message_id}", "delete", {}, Parameters)
    }
    
    async update_message(Body, Parameters) {
        return await this.Fetch("/channels/{channel_id}/messages/{message_id}", "patch", Body, Parameters)
    }
    
    async list_messages(Parameters) {
        return await this.Fetch("/channels/{channel_id}/messages", "get", {}, Parameters)
    }
    
    async create_message(Body, Parameters) {
        return await this.Fetch("/channels/{channel_id}/messages", "post", Body, Parameters)
    }
    
    async list_channel_webhooks(Parameters) {
        return await this.Fetch("/channels/{channel_id}/webhooks", "get", {}, Parameters)
    }
    
    async create_webhook(Body, Parameters) {
        return await this.Fetch("/channels/{channel_id}/webhooks", "post", Body, Parameters)
    }
    
    async list_channel_invites(Parameters) {
        return await this.Fetch("/channels/{channel_id}/invites", "get", {}, Parameters)
    }
    
    async create_channel_invite(Body, Parameters) {
        return await this.Fetch("/channels/{channel_id}/invites", "post", Body, Parameters)
    }
    
    async create_thread(Body, Parameters) {
        return await this.Fetch("/channels/{channel_id}/threads", "post", Body, Parameters)
    }
    
    async trigger_typing_indicator(Body, Parameters) {
        return await this.Fetch("/channels/{channel_id}/typing", "post", Body, Parameters)
    }
    
    async pin_message(Body, Parameters) {
        return await this.Fetch("/channels/{channel_id}/pins/{message_id}", "put", Body, Parameters)
    }
    
    async unpin_message(Parameters) {
        return await this.Fetch("/channels/{channel_id}/pins/{message_id}", "delete", {}, Parameters)
    }
    
    async list_pinned_messages(Parameters) {
        return await this.Fetch("/channels/{channel_id}/pins", "get", {}, Parameters)
    }
    
    async get_webhook_message(Parameters) {
        return await this.Fetch("/webhooks/{webhook_id}/{webhook_token}/messages/{message_id}", "get", {}, Parameters)
    }
    
    async delete_webhook_message(Parameters) {
        return await this.Fetch("/webhooks/{webhook_id}/{webhook_token}/messages/{message_id}", "delete", {}, Parameters)
    }
    
    async update_webhook_message(Body, Parameters) {
        return await this.Fetch("/webhooks/{webhook_id}/{webhook_token}/messages/{message_id}", "patch", Body, Parameters)
    }
    
    async execute_github_compatible_webhook(Body, Parameters) {
        return await this.Fetch("/webhooks/{webhook_id}/{webhook_token}/github", "post", Body, Parameters)
    }
    
    async execute_slack_compatible_webhook(Body, Parameters) {
        return await this.Fetch("/webhooks/{webhook_id}/{webhook_token}/slack", "post", Body, Parameters)
    }
    
    async get_guild_template(Parameters) {
        return await this.Fetch("/guilds/templates/{code}", "get", {}, Parameters)
    }
    
    async create_guild_from_template(Body, Parameters) {
        return await this.Fetch("/guilds/templates/{code}", "post", Body, Parameters)
    }
    
    async get_guild_new_member_welcome(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/new-member-welcome", "get", {}, Parameters)
    }
    
    async get_guild_scheduled_event(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}", "get", {}, Parameters)
    }
    
    async delete_guild_scheduled_event(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}", "delete", {}, Parameters)
    }
    
    async update_guild_scheduled_event(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}", "patch", Body, Parameters)
    }
    
    async list_guild_scheduled_events(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/scheduled-events", "get", {}, Parameters)
    }
    
    async create_guild_scheduled_event(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/scheduled-events", "post", Body, Parameters)
    }
    
    async get_guild_welcome_screen(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/welcome-screen", "get", {}, Parameters)
    }
    
    async update_guild_welcome_screen(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/welcome-screen", "patch", Body, Parameters)
    }
    
    async update_voice_state(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/voice-states/{user_id}", "patch", Body, Parameters)
    }
    
    async delete_guild_integration(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/integrations/{integration_id}", "delete", {}, Parameters)
    }
    
    async list_guild_integrations(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/integrations", "get", {}, Parameters)
    }
    
    async get_guild_widget(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/widget.json", "get", {}, Parameters)
    }
    
    async get_guilds_onboarding(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/onboarding", "get", {}, Parameters)
    }
    
    async put_guilds_onboarding(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/onboarding", "put", Body, Parameters)
    }
    
    async get_guild_vanity_url(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/vanity-url", "get", {}, Parameters)
    }
    
    async list_guild_audit_log_entries(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/audit-logs", "get", {}, Parameters)
    }
    
    async get_guild_widget_png(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/widget.png", "get", {}, Parameters)
    }
    
    async sync_guild_template(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/templates/{code}", "put", Body, Parameters)
    }
    
    async delete_guild_template(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/templates/{code}", "delete", {}, Parameters)
    }
    
    async update_guild_template(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/templates/{code}", "patch", Body, Parameters)
    }
    
    async list_guild_templates(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/templates", "get", {}, Parameters)
    }
    
    async create_guild_template(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/templates", "post", Body, Parameters)
    }
    
    async get_guild_sticker(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/stickers/{sticker_id}", "get", {}, Parameters)
    }
    
    async delete_guild_sticker(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/stickers/{sticker_id}", "delete", {}, Parameters)
    }
    
    async update_guild_sticker(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/stickers/{sticker_id}", "patch", Body, Parameters)
    }
    
    async list_guild_stickers(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/stickers", "get", {}, Parameters)
    }
    
    async create_guild_sticker(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/stickers", "post", Body, Parameters)
    }
    
    async get_guild_webhooks(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/webhooks", "get", {}, Parameters)
    }
    
    async list_guild_channels(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/channels", "get", {}, Parameters)
    }
    
    async create_guild_channel(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/channels", "post", Body, Parameters)
    }
    
    async bulk_update_guild_channels(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/channels", "patch", Body, Parameters)
    }
    
    async get_guild_member(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/members/{user_id}", "get", {}, Parameters)
    }
    
    async add_guild_member(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/members/{user_id}", "put", Body, Parameters)
    }
    
    async delete_guild_member(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/members/{user_id}", "delete", {}, Parameters)
    }
    
    async update_guild_member(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/members/{user_id}", "patch", Body, Parameters)
    }
    
    async list_guild_members(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/members", "get", {}, Parameters)
    }
    
    async get_guild_preview(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/preview", "get", {}, Parameters)
    }
    
    async list_guild_invites(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/invites", "get", {}, Parameters)
    }
    
    async list_guild_voice_regions(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/regions", "get", {}, Parameters)
    }
    
    async get_guild_emoji(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/emojis/{emoji_id}", "get", {}, Parameters)
    }
    
    async delete_guild_emoji(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/emojis/{emoji_id}", "delete", {}, Parameters)
    }
    
    async update_guild_emoji(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/emojis/{emoji_id}", "patch", Body, Parameters)
    }
    
    async list_guild_emojis(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/emojis", "get", {}, Parameters)
    }
    
    async create_guild_emoji(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/emojis", "post", Body, Parameters)
    }
    
    async get_guild_widget_settings(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/widget", "get", {}, Parameters)
    }
    
    async update_guild_widget_settings(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/widget", "patch", Body, Parameters)
    }
    
    async delete_guild_role(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/roles/{role_id}", "delete", {}, Parameters)
    }
    
    async update_guild_role(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/roles/{role_id}", "patch", Body, Parameters)
    }
    
    async list_guild_roles(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/roles", "get", {}, Parameters)
    }
    
    async create_guild_role(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/roles", "post", Body, Parameters)
    }
    
    async bulk_update_guild_roles(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/roles", "patch", Body, Parameters)
    }
    
    async preview_prune_guild(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/prune", "get", {}, Parameters)
    }
    
    async prune_guild(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/prune", "post", Body, Parameters)
    }
    
    async get_guild_ban(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/bans/{user_id}", "get", {}, Parameters)
    }
    
    async ban_user_from_guild(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/bans/{user_id}", "put", Body, Parameters)
    }
    
    async unban_user_from_guild(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/bans/{user_id}", "delete", {}, Parameters)
    }
    
    async list_guild_bans(Parameters) {
        return await this.Fetch("/guilds/{guild_id}/bans", "get", {}, Parameters)
    }
    
    async set_guild_mfa_level(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}/mfa", "post", Body, Parameters)
    }
    
    async get_stage_instance(Parameters) {
        return await this.Fetch("/stage-instances/{channel_id}", "get", {}, Parameters)
    }
    
    async delete_stage_instance(Parameters) {
        return await this.Fetch("/stage-instances/{channel_id}", "delete", {}, Parameters)
    }
    
    async update_stage_instance(Body, Parameters) {
        return await this.Fetch("/stage-instances/{channel_id}", "patch", Body, Parameters)
    }
    
    async get_application(Parameters) {
        return await this.Fetch("/applications/{application_id}", "get", {}, Parameters)
    }
    
    async update_application(Body, Parameters) {
        return await this.Fetch("/applications/{application_id}", "patch", Body, Parameters)
    }
    
    async get_webhook_by_token(Parameters) {
        return await this.Fetch("/webhooks/{webhook_id}/{webhook_token}", "get", {}, Parameters)
    }
    
    async execute_webhook(Body, Parameters) {
        return await this.Fetch("/webhooks/{webhook_id}/{webhook_token}", "post", Body, Parameters)
    }
    
    async delete_webhook_by_token(Parameters) {
        return await this.Fetch("/webhooks/{webhook_id}/{webhook_token}", "delete", {}, Parameters)
    }
    
    async update_webhook_by_token(Body, Parameters) {
        return await this.Fetch("/webhooks/{webhook_id}/{webhook_token}", "patch", Body, Parameters)
    }
    
    async get_sticker(Parameters) {
        return await this.Fetch("/stickers/{sticker_id}", "get", {}, Parameters)
    }
    
    async get_webhook(Parameters) {
        return await this.Fetch("/webhooks/{webhook_id}", "get", {}, Parameters)
    }
    
    async delete_webhook(Parameters) {
        return await this.Fetch("/webhooks/{webhook_id}", "delete", {}, Parameters)
    }
    
    async update_webhook(Body, Parameters) {
        return await this.Fetch("/webhooks/{webhook_id}", "patch", Body, Parameters)
    }
    
    async get_channel(Parameters) {
        return await this.Fetch("/channels/{channel_id}", "get", {}, Parameters)
    }
    
    async delete_channel(Parameters) {
        return await this.Fetch("/channels/{channel_id}", "delete", {}, Parameters)
    }
    
    async update_channel(Body, Parameters) {
        return await this.Fetch("/channels/{channel_id}", "patch", Body, Parameters)
    }
    
    async invite_resolve(Parameters) {
        return await this.Fetch("/invites/{code}", "get", {}, Parameters)
    }
    
    async invite_revoke(Parameters) {
        return await this.Fetch("/invites/{code}", "delete", {}, Parameters)
    }
    
    async get_guild(Parameters) {
        return await this.Fetch("/guilds/{guild_id}", "get", {}, Parameters)
    }
    
    async delete_guild(Parameters) {
        return await this.Fetch("/guilds/{guild_id}", "delete", {}, Parameters)
    }
    
    async update_guild(Body, Parameters) {
        return await this.Fetch("/guilds/{guild_id}", "patch", Body, Parameters)
    }
    
    async get_user(Parameters) {
        return await this.Fetch("/users/{user_id}", "get", {}, Parameters)
    }
    
}

export default API
