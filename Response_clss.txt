public class Response_cls{
	public String kind;
	public cls_DataSourceContent DataSourceContent;
	public class cls_DataSourceContent {
		public String after;	
		public Integer dist;	
		public String modhash;	
		public cls_children[] children;
		public string before;
	}
	public class cls_geo_filter {
	}
	public class cls_children {
		public String kind;	//t3
		public cls_data data;
	}
	public class cls_data {

		public String thumbnail;
		public String title;
		public String selftext;	//
		public String author_fullname;

	}
	public class cls_approved_at_utc {
	}
	public class cls_mod_reason_title {
	}
	public class cls_link_flair_richtext {
	}
	public class cls_link_flair_css_class {
	}
	public class cls_top_awarded_type {
	}
	public class cls_author_flair_background_color {
	}
	public class cls_media_embed {
	}
	public class cls_author_flair_template_id {
	}
	public class cls_user_reports {
	}
	public class cls_secure_media {
	}
	public class cls_category {
	}
	public class cls_secure_media_embed {
	}
	public class cls_link_flair_text {
	}
	public class cls_approved_by {
	}
	public class cls_author_flair_css_class {
	}
	public class cls_author_flair_richtext {
	}
	public class cls_gildings {
		public Integer gid_1;	//7
	}
	public class cls_content_categories {
	}
	public class cls_mod_note {
	}
	public class cls_removed_by_category {
	}
	public class cls_banned_by {
	}
	public class cls_selftext_html {
	}
	public class cls_likes {
	}
	public class cls_suggested_sort {
	}
	public class cls_banned_at_utc {
	}
	public class cls_view_count {
	}
	public class cls_preview {
		public cls_images[] images;
		public boolean enabled;
	}
	public class cls_images {
		public cls_source source;
		public cls_resolutions[] resolutions;
		public cls_variants variants;
		public String id;	//bhkbiZ-HIXhhoTwLkqzNaXMglo1823YicKzJL6reKVM
	}
	public class cls_source {
		public String url;	//https://preview.redd.it/i2ctpiw0pgm71.jpg?auto=webp&amp;s=fb79e5bb827c059e7162ec9a371a862f8a864480
		public Integer width;	//660
		public Integer height;	//440
	}
	public class cls_resolutions {
		public String url;	//https://preview.redd.it/i2ctpiw0pgm71.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=3ac94221bbf481d1d5d8388a209f380347af67f6
		public Integer width;	//108
		public Integer height;	//72
	}
	public class cls_variants {
	}
	public class cls_all_awardings {
		public Integer giver_coin_reward;	//0
		public cls_subreddit_id subreddit_id;
		public boolean is_new;
		public Integer days_of_drip_extension;	//0
		public Integer coin_price;	//250
		public String id;	//award_3f4e6f36-dacc-4919-b170-9d0201cd258f
		public Integer penny_donate;	//0
		public String award_sub_type;	//GLOBAL
		public Integer coin_reward;	//0
		public String icon_url;	//https://www.redditstatic.com/gold/awards/icon/Vibing_512.png
		public Integer days_of_premium;	//0
		public cls_tiers_by_required_awardings tiers_by_required_awardings;
		public cls_resized_icons[] resized_icons;
		public Integer icon_width;	//512
		public Integer static_icon_width;	//512
		public Decimal start_date;
		public boolean is_enabled;
		public cls_awardings_required_to_grant_benefits awardings_required_to_grant_benefits;
		public String description;	//I'm catching the vibration
		public cls_end_date end_date;
		public Integer subreddit_coin_reward;	//0
		public Integer count;	//1
		public Integer static_icon_height;	//512
		public String name;	//Vibing
		public cls_resized_static_icons[] resized_static_icons;
		public String icon_format;	//APNG
		public Integer icon_height;	//512
		public Integer penny_price;	//0
		public String award_type;	//global
		public String static_icon_url;	//https://i.redd.it/award_images/t5_22cerq/95cnwtudh5f61_Vibing.png
	}
	public class cls_subreddit_id {
	}
	public class cls_tiers_by_required_awardings {
	}
	public class cls_resized_icons {
		public String url;	//https://www.redditstatic.com/gold/awards/icon/Vibing_16.png
		public Integer width;	//16
		public Integer height;	//16
	}
	public class cls_start_date {
	}
	public class cls_awardings_required_to_grant_benefits {
	}
	public class cls_end_date {
	}
	public class cls_resized_static_icons {
		public String url;	//https://preview.redd.it/award_images/t5_22cerq/95cnwtudh5f61_Vibing.png?width=16&amp;height=16&amp;auto=webp&amp;s=5a4409a576a13def135a6d2704cc24ac429e0a84
		public Integer width;	//16
		public Integer height;	//16
	}
	public class cls_awarders {
	}
	public class cls_author_flair_text {
	}
	public class cls_treatment_tags {
	}
	public class cls_removed_by {
	}
	public class cls_num_reports { 
	}
	public class cls_distinguished {
	}
	public class cls_mod_reason_by {
	}
	public class cls_removal_reason {
	}
	public class cls_report_reasons {
	}
	public class cls_discussion_type {
	}
	public class cls_mod_reports {
	}
	public class cls_author_flair_text_color {
	}
	public class cls_media {
	}
	public class cls_before {
	}
	public static Response_cls parse(String json){
		return (Response_cls) System.JSON.deserialize(json, Response_cls.class);
	}

}