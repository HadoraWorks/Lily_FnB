function MenuTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="menu-tabs" role="tablist" aria-label="Menu categories">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          id={`tab-${tab.id}`}
          type="button"
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={`panel-${tab.id}`}
          className={activeTab === tab.id ? 'menu-tab is-active' : 'menu-tab'}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default MenuTabs
