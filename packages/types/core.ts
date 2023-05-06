/* eslint-disable @typescript-eslint/ban-types */
// DO NOT MODIFY THIS FILE, IT IS AUTOGENERATED

export type StumpVersion = { semver: string; rev: string | null; compile_time: string }

export type User = { id: string; username: string; role: string; user_preferences: UserPreferences | null; avatar_url: string | null; read_progresses: ReadProgress[] | null }

export type UserRole = "SERVER_OWNER" | "MEMBER"

export type UserPreferences = { id: string; locale: string; library_layout_mode: string; series_layout_mode: string; collection_layout_mode: string; app_theme: string }

export type UpdateUserArgs = { username: string; password: string | null; avatar_url: string | null }

export type UserPreferencesUpdate = { id: string; locale: string; library_layout_mode: string; series_layout_mode: string; collection_layout_mode: string; app_theme: string }

export type LoginOrRegisterArgs = { username: string; password: string }

export type ClaimResponse = { is_claimed: boolean }

export type FileStatus = "UNKNOWN" | "READY" | "UNSUPPORTED" | "ERROR" | "MISSING"

export type Library = { id: string; name: string; description: string | null; path: string; status: string; updated_at: string; series: Series[] | null; tags: Tag[] | null; library_options: LibraryOptions }

export type LibraryPattern = "SERIES_BASED" | "COLLECTION_BASED"

export type LibraryScanMode = "SYNC" | "BATCHED" | "NONE"

export type LibraryOptions = { id: string | null; convert_rar_to_zip: boolean; hard_delete_conversions: boolean; create_webp_thumbnails: boolean; library_pattern: LibraryPattern; library_id: string | null }

export type CreateLibraryArgs = { name: string; path: string; description: string | null; tags: Tag[] | null; scan_mode: LibraryScanMode | null; library_options: LibraryOptions | null }

export type UpdateLibraryArgs = { id: string; name: string; path: string; description: string | null; tags: Tag[] | null; removed_tags: Tag[] | null; library_options: LibraryOptions; scan_mode: LibraryScanMode | null }

export type LibrariesStats = { series_count: BigInt; book_count: BigInt; total_bytes: BigInt }

export type Series = { id: string; name: string; path: string; description: string | null; status: FileStatus; updated_at: string; created_at: string; library_id: string; library: Library | null; media: Media[] | null; media_count?: BigInt | null; unread_media_count?: BigInt | null; tags: Tag[] | null }

export type Media = { id: string; name: string; description: string | null; size: number; extension: string; pages: number; updated_at: string; created_at: string; modified_at: string; checksum: string | null; path: string; status: FileStatus; series_id: string; series?: Series | null; read_progresses?: ReadProgress[] | null; current_page?: number | null; current_epubcfi?: string | null; is_completed?: boolean | null; tags?: Tag[] | null }

export type MediaMetadata = { Series: string | null; Number: number | null; Web: string | null; Summary: string | null; Publisher: string | null; Genre: string | null; PageCount: number | null }

export type ReadProgress = { id: string; page: number; epubcfi: string | null; percentage_completed: number | null; is_completed: boolean; completed_at: string | null; media_id: string; media: Media | null; user_id: string; user: User | null }

export type Tag = { id: string; name: string }

export type LayoutMode = "GRID" | "LIST"

export type Epub = { media_entity: Media; spine: string[]; resources: { [key: string]: [string, string] }; toc: EpubContent[]; metadata: { [key: string]: string[] }; annotations: MediaAnnotation[] | null; root_base: string; root_file: string; extra_css: string[] }

export type UpdateEpubProgress = { epubcfi: string; percentage: number; is_complete: boolean | null }

export type EpubContent = { label: string; content: string; play_order: number }

export type JobStatus = "RUNNING" | "QUEUED" | "COMPLETED" | "CANCELLED" | "FAILED"

export type JobUpdate = { runner_id: string; current_task: BigInt | null; task_count: BigInt; message: string | null; status: JobStatus | null }

export type JobReport = { id: string | null; kind: string; details: string | null; status: JobStatus; task_count: number | null; completed_task_count: number | null; ms_elapsed: BigInt | null; completed_at: string | null }

export type CoreEvent = { key: "JobStarted"; data: JobUpdate } | { key: "JobProgress"; data: JobUpdate } | { key: "JobComplete"; data: string } | { key: "JobFailed"; data: { runner_id: string; message: string } } | { key: "CreateEntityFailed"; data: { runner_id: string | null; path: string; message: string } } | { key: "CreatedMedia"; data: Media } | { key: "CreatedMediaBatch"; data: BigInt } | { key: "CreatedSeries"; data: Series } | { key: "CreatedSeriesBatch"; data: BigInt }

export type ReadingList = { id: string; name: string; creating_user_id: string; visibility: ReadingListVisibility; description: string | null; items: ReadingListItem[] | null }

export type CreateReadingList = { id: string; media_ids: string[]; visibility: ReadingListVisibility | null }

export type DirectoryListing = { parent: string | null; files: DirectoryListingFile[] }

export type DirectoryListingFile = { is_directory: boolean; name: string; path: string }

export type DirectoryListingInput = { path: string | null }

export type Log = { id: string; level: LogLevel; message: string; created_at: string; job_id: string | null }

/**
 * Information about the Stump log file, located at STUMP_CONFIG_DIR/Stump.log, or
 * ~/.stump/Stump.log by default. Information such as the file size, last modified date, etc.
 */
export type LogMetadata = { path: string; size: BigInt; modified: string }

export type LogLevel = "ERROR" | "WARN" | "INFO" | "DEBUG"

export type Direction = "asc" | "desc"

export type PageParams = { zero_based: boolean; page: number; page_size: number }

/**
 * Model used in media API to alter sorting/ordering of queried media
 */
export type QueryOrder = { order_by: string; direction: Direction }

export type PageQuery = { zero_based: boolean | null; page: number | null; page_size: number | null }

export type CursorQuery = { cursor: string | null; limit: BigInt | null }

export type CursorInfo = { current_cursor: string | null; limit: BigInt | null; next_cursor: string | null }

export type PageInfo = { total_pages: number; current_page: number; page_size: number; page_offset: number; zero_based: boolean }

export type Pagination = null | PageQuery | CursorQuery

