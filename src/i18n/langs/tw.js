const tw = {
  message: {
    new_connection: '新增連線',
    refresh_connection: '重新整理',
    edit_connection: '編輯連線',
    del_connection: '刪除連線',
    add_new_line: '新增行',
    redis_version: 'Redis 版本',
    process_id: '處理程序 ID',
    used_memory: '已用記憶體',
    used_memory_peak: '記憶體佔用峰值',
    used_memory_lua: 'Lua 佔用記憶體',
    connected_clients: '用戶端連線數',
    total_connections_received: '歷史連線數',
    total_commands_processed: '歷史指令數',
    key_statistics: '鍵值統計',
    all_redis_info: 'Redis 資訊總覽',
    server: '伺服器',
    memory: '記憶體',
    stats: '狀態',
    settings: '基本設定',
    confirm_to_delete_row_data: '確認刪除該行資料？',
    delete_success: '刪除成功',
    delete_failed: '刪除失敗',
    modify_success: '修改成功',
    modify_failed: '修改失敗',
    add_success: '新增成功',
    add_failed: '新增失敗',
    value_exists: '值已存在',
    refresh_success: '重新整理成功',
    click_enter_to_rename: '單擊或者按 Enter 鍵來重新命名',
    click_enter_to_ttl: '單擊或者按 Enter 鍵來修改過期時間',
    confirm_to_delete_key: '確認刪除 {key} ？',
    edit_line: '修改行',
    auto_refresh: '自動重新整理',
    auto_refresh_tip: '自動重新整理開關，每 {interval} 秒重新整理一次',
    key_not_exists: '鍵不存在',
    collapse_all: '全部摺疊',
    expand_all: '全部展開',
    json_format_failed: 'JSON 格式化失敗',
    php_unserialize_format_failed: 'PHP Unserialize 格式化失敗',
    clean_up: '清空',
    redis_console: 'Redis 控制台',
    confirm_to_delete_connection: '確認刪除連線？',
    connection_exists: '連線設定已存在',
    close_to_edit_connection: '編輯前必須關閉連線，要繼續嗎',
    ttl_delete: '設定 TTL<=0 將刪除該鍵，是否確認？',
    max_page_reached: '已到達最大頁碼',
    add_new_key: '新增鍵',
    enter_new_key: '請先輸入新的鍵名',
    key_type: '類型',
    save: '儲存',
    enter_to_search: 'Enter 鍵進行搜尋',
    export_success: '匯出成功',
    select_import_file: '選擇設定檔',
    import_success: '匯入成功',
    put_file_here: '將檔案拖到此處，或單擊選擇',
    config_connections: '連線設定',
    import: '匯入',
    export: '匯出',
    open: '打開',
    close: '關閉',
    open_new_tab: '以新視窗打開',
    exact_search: '精確搜尋',
    enter_to_exec: '輸入 Redis 指令後，按 Enter 鍵執行，上下鍵切換歷史',
    pre_version: '目前版本',
    manual_update: '手動下載',
    retry_too_many_times: '嘗試重連次數過多，請檢查伺服器狀態',
    key_to_search: '輸入關鍵字搜尋',
    check_update: '檢查更新',
    update_checking: '檢查更新中, 請稍後...',
    update_available: '發現新版本',
    update_not_available: '目前為最新版本',
    update_error: '更新失敗',
    update_downloading: '下載中...',
    update_download_progress: '下載進度',
    update_downloaded: '更新下載完成，重啟用戶端生效',
    mac_not_support_auto_update: 'Mac 暫時不支援自動更新，請手動下載後重新安裝，或者執行\
    brew cask reinstall another-redis-desktop-manager',
    font_family: '字體選擇',
    font_faq_title: '字體設定說明',
    font_faq: '1. 可以設定多個字體<br>2. 字體選擇是有分先後順序的，建議首先選擇英文字體，然後再選擇中文字體<br>\
    3. 某些異常情況無法載入系統字體列表時，可以手動輸入已安裝的字體名稱',
    private_key_faq: '目前支持RSA格式私鑰，即以<pre>-----BEGIN RSA PRIVATE KEY-----</pre>開頭，\
    以<pre>-----BEGIN OPENSSH PRIVATE KEY-----</pre>開頭的，需要執行\
    <pre>ssh-keygen -p -m pem -f ~/.ssh/id_rsa</pre>進行格式轉換後再使用，該操作不會影響以前的私鑰登陸',
    dark_mode: '深色模式',
    load_more_keys: '加載更多',
    key_name: '鍵名',
    project_home: '項目主頁',
    cluster_faq: '選擇集群中任一節點配置填入即可，會自動識別其它節點',
    redis_status: 'Redis信息',
    confirm_flush_db: '確認刪除db{db}中的所有鍵值麽？',
    flushdb: '刪除所有鍵',
    info_disabled: 'Info命令執行異常（可能已被禁用），無法顯示Redis信息',
  },
};

export default tw;
