```jsx
className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white"
value={userProfile.interests}
onChange={(e) => setUserProfile({...userProfile, interests: e.target.value})}
/>
</div>
<div>
<label className="block text-sm text-slate-500 mb-1">Previous Experience (One-liner)</label>
<textarea
className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white h-24"
value={userProfile.prevInternship}
onChange={(e) => setUserProfile({...userProfile, prevInternship: e.target.value})}
/>
</div>


<div className="flex justify-end pt-4">
<button
onClick={() => {
localStorage.setItem('futureai_profile', JSON.stringify(userProfile))
showNotification('Profile saved!')
}}
className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
>
<Save size={18} />
<span>Save Profile</span>
</button>
</div>
</div>
</div>
)}


{currentView === 'settings' && (
<div className="max-w-2xl mx-auto space-y-6">
<h2 className="text-2xl font-bold text-white">System Settings</h2>


<div className="bg-slate-900 border border-slate-800 rounded-xl p-8 space-y-6">
<div>
<label className="block text-sm font-bold text-white mb-2">Google Gemini API Key</label>
<p className="text-sm text-slate-400 mb-4">Required for AI research and email generation. Your key is stored locally in your browser and can be set via .env.</p>
<div className="flex space-x-2">
<input
type="password"
className="flex-1 bg-slate-950 border border-slate-700 rounded p-3 text-white font-mono text-sm"
value={apiKey}
onChange={(e) => setApiKey(e.target.value)}
placeholder="Paste key or set VITE_GEMINI_API_KEY in .env"
/>
<button
className="px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700"
onClick={() => {
if (apiKey) showNotification('API Key Updated')
}}
>
Update
</button>
</div>
</div>


<div className="pt-6 border-t border-slate-800">
<h3 className="text-lg font-bold text-white mb-4">Data Management</h3>
<button
onClick={() => {
if (confirm('Are you sure? This deletes all found professors.')) {
setProfessors([])
localStorage.removeItem('futureai_profs')
showNotification('Database cleared', 'error')
}
}}
className="text-red-400 hover:text-red-300 text-sm border border-red-900/50 bg-red-900/10 px-4 py-2 rounded"
>
Clear All Data
</button>
</div>
</div>
</div>
)}


</main>
</div>
</div>
</div>
)
}
```
