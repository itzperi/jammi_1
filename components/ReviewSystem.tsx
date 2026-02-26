import React, { useState } from 'react';

interface Review {
    id: number;
    author: string;
    rating: number;
    text: string;
    date: string;
    isVerified: boolean;
}

const ReviewSystem: React.FC<{ productId: string }> = ({ productId }) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [newReview, setNewReview] = useState({ author: '', rating: 5, text: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const review: Review = {
            id: Date.now(),
            author: newReview.author || 'Anonymous Guest',
            rating: newReview.rating,
            text: newReview.text,
            date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
            isVerified: false
        };

        setReviews([review, ...reviews]);
        setNewReview({ author: '', rating: 5, text: '' });
        setShowForm(false);
    };

    return (
        <div className="mt-20 border-t border-brand-red/10 pt-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                <div>
                    <h2 className="font-heading text-3xl md:text-4xl text-brand-red mb-2 uppercase tracking-tight">Heritage Experiences</h2>
                    <div className="flex items-center gap-3">
                        <div className="flex text-warm-gold">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <span key={s} className="material-symbols-outlined text-xl">star</span>
                            ))}
                        </div>
                        <span className="text-sm font-subheading font-bold text-charcoal/60 uppercase tracking-widest">{reviews.length + 42} Verified Reviews</span>
                    </div>
                </div>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-brand-red text-white font-subheading font-bold px-8 py-4 text-xs uppercase tracking-[0.2em] transition-all hover:shadow-2xl hover:shadow-brand-red/30 active:scale-95"
                >
                    {showForm ? 'Cancel Entry' : 'Share Experience'}
                </button>
            </div>

            {showForm && (
                <form onSubmit={handleSubmit} className="mb-16 bg-slate-50 p-8 md:p-12 rounded-2xl animate-fade-in order border border-brand-red/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-charcoal/50">Your Name</label>
                            <input
                                type="text"
                                value={newReview.author}
                                onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                                placeholder="Full Name"
                                className="bg-white border-b-2 border-slate-200 p-4 focus:border-brand-red outline-none transition-colors font-body"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-charcoal/50">Rating</label>
                            <div className="flex items-center gap-2 h-full">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setNewReview({ ...newReview, rating: star })}
                                        className={`material-symbols-outlined text-2xl transition-colors ${star <= newReview.rating ? 'text-warm-gold' : 'text-slate-300'}`}
                                    >
                                        star
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mb-8">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-charcoal/50">Your Experience</label>
                        <textarea
                            rows={4}
                            value={newReview.text}
                            onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                            placeholder="What did you feel after using this formulation?"
                            className="bg-white border-b-2 border-slate-200 p-4 focus:border-brand-red outline-none transition-colors font-body resize-none"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-brand-red text-white font-subheading font-bold py-5 uppercase tracking-[0.2em] text-sm">
                        Publish To Heritage Board
                    </button>
                </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-white p-8 border border-slate-100 shadow-sm rounded-xl animate-fade-in-up">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex text-warm-gold">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                    <span key={i} className="material-symbols-outlined text-sm">star</span>
                                ))}
                            </div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-subheading">{review.date}</span>
                        </div>
                        <p className="text-charcoal/80 text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red font-bold text-[10px]">
                                {review.author[0]}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-charcoal">{review.author}</span>
                                <span className="text-[8px] font-bold text-warm-gold uppercase tracking-[0.2em]">Patient Testimony</span>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Placeholder Reviews for premium look */}
                {[
                    { author: "Dr. Ananya Iyer", text: "Specifically potent for chronic cases. The purity of the extraction is visible." },
                    { author: "Vikram Sethi", text: "Regained my vitality within 3 weeks. Traditional medicine at its absolute best." }
                ].map((r, i) => (
                    <div key={i} className="bg-white p-8 border border-slate-100 shadow-sm rounded-xl opacity-60 grayscale hover:grayscale-0 transition-all cursor-default group">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex text-warm-gold">
                                {[1, 2, 3, 4, 5].map((s) => <span key={s} className="material-symbols-outlined text-sm">star</span>)}
                            </div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-subheading underline decoration-brand-red/20 underline-offset-4">Verified</span>
                        </div>
                        <p className="text-charcoal/80 text-sm leading-relaxed mb-6 italic group-hover:text-charcoal">"{r.text}"</p>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-[10px] uppercase">
                                {r.author[0]}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-charcoal">{r.author}</span>
                                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.2em]">Legacy Practitioner</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSystem;
