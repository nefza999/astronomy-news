// translation.js - Enhanced with reaction and registration keys
const AN_translations = {
    en: {
        // Existing translations
        'An.index.title': 'Astronomy News',
        'An.index.language': 'Language:',
        'An.index.theme': 'Theme:',
        'An.index.home': 'Home',
        'An.index.news': 'News',
        'An.index.missions': 'Missions',
        'An.index.explore': 'Explore Astronomy',
        'An.index.gallery': 'Gallery',
        'An.index.about': 'About',
        'An.index.heroTitle': 'Exploring the Universe',
        'An.index.heroText': 'Latest discoveries, missions, and cosmic events from across the universe',
        'An.index.exploreBtn': 'Explore News',
        'An.index.featuredNews': 'Featured News',
        'An.index.allNews': 'All News',
        'An.index.globalNews': 'Global News',
        'An.index.localNews': 'Tunisia News',
        'An.index.readMore': 'Read More',
        'An.index.upcomingEvents': 'Upcoming Events',
        'An.index.aboutUs': 'About Us',
        'An.index.aboutText': 'Astronomy News brings you the latest news and discoveries from the world of astronomy and space exploration.',
        'An.index.quickLinks': 'Quick Links',
        'An.index.developer': 'Developer',
        'An.index.legal': 'Legal',
        'An.index.privacyPolicy': 'Privacy Policy',
        'An.index.termsOfUse': 'Terms of Use',
        'An.index.notifications': 'Notifications',
        'An.index.markAllRead': 'Mark all as read',
        'An.index.noNotifications': 'No new notifications',
        'An.index.timeAgo': '2 hours ago',
        'An.index.eventDetails': 'Event Details',
        'An.index.close': 'Close',
        
        // New reaction and registration keys
        'An.reaction.like': 'Like',
        'An.reaction.dislike': 'Dislike',
        'An.reaction.comment': 'Comment',
        'An.reaction.comments': 'Comments',
        'An.reaction.share': 'Share',
        'An.reaction.shareFacebook': 'Share on Facebook',
        'An.reaction.shareTwitter': 'Share on Twitter',
        'An.reaction.shareLinkedIn': 'Share on LinkedIn',
        'An.reaction.shareWhatsApp': 'Share on WhatsApp',
        'An.reaction.copyLink': 'Copy Link',
        'An.reaction.addComment': 'Add a comment...',
        'An.reaction.postComment': 'Post Comment',
        'An.reaction.noComments': 'No comments yet. Be the first!',
        'An.reaction.loadingComments': 'Loading comments...',
    'An.auth.emailPlaceholder': 'Enter email or username',
    'An.auth.namePlaceholder': 'Enter your full name',
    'An.auth.usernamePlaceholder': 'Enter username',
    'An.auth.passwordPlaceholder': 'Enter password',
    'An.auth.confirmPasswordPlaceholder': 'Confirm password',
        
        'An.auth.login': 'Login',
        'An.auth.register': 'Register',
        'An.auth.logout': 'Logout',
        'An.auth.profile': 'Profile',
        'An.auth.username': 'Username',
        'An.auth.password': 'Password',
        'An.auth.email': 'Email or Username',
        'An.auth.name': 'Full Name',
        'An.auth.confirmPassword': 'Confirm Password',
        'An.auth.rememberMe': 'Remember me',
        'An.auth.forgotPassword': 'Forgot password?',
        'An.auth.noAccount': 'Don\'t have an account?',
        'An.auth.haveAccount': 'Already have an account?',
        'An.auth.signUp': 'Sign Up',
        'An.auth.signIn': 'Sign In',
        'An.auth.agreeTerms': 'I agree to the Terms and Privacy Policy',
        
        'An.validation.required': 'This field is required',
        'An.validation.email': 'Please enter a valid email',
        'An.validation.passwordLength': 'Password must be at least 6 characters',
        'An.validation.passwordMatch': 'Passwords do not match',
        'An.validation.usernameLength': 'Username must be 3-20 characters',
        
        'An.message.loginSuccess': 'Logged in successfully!',
        'An.message.registerSuccess': 'Account created successfully!',
        'An.message.logoutSuccess': 'Logged out successfully!',
        'An.message.reactionAdded': 'Reaction added!',
        'An.message.commentAdded': 'Comment posted!',
        'An.message.shareSuccess': 'Link copied to clipboard!',
        'An.message.error': 'Something went wrong. Please try again.',
        'An.message.offline': 'You are offline. Changes will sync when you reconnect.',
        
        'An.stats.likes': 'Likes',
        'An.stats.dislikes': 'Dislikes',
        'An.stats.comments': 'Comments',
        'An.stats.views': 'Views',
        'An.stats.shares': 'Shares'
    },
    fr: {
        // Existing French translations
        'An.index.title': 'Actualités Astronomiques',
        'An.index.language': 'Langue:',
        'An.index.theme': 'Thème:',
        'An.index.home': 'Accueil',
        'An.index.news': 'Actualités',
        'An.index.missions': 'Missions',
        'An.index.explore': 'Explorer l\'Astronomie',
        'An.index.gallery': 'Galerie',
        'An.index.about': 'À propos',
        'An.index.heroTitle': 'Explorer l\'Univers',
        'An.index.heroText': 'Dernières découvertes, missions et événements cosmiques de l\'univers entier',
        'An.index.exploreBtn': 'Explorer les actualités',
        'An.index.featuredNews': 'Actualités en vedette',
        'An.index.allNews': 'Toutes les actualités',
        'An.index.globalNews': 'Actualités Mondiales',
        'An.index.localNews': 'Actualités Tunisie',
        'An.index.readMore': 'Lire la suite',
        'An.index.eventDetails': 'Détails de l\'événement',
        'An.index.close': 'Fermer',
        'An.index.upcomingEvents': 'Événements à venir',
        'An.index.aboutUs': 'À propos de nous',
        'An.index.aboutText': 'Actualités Astronomiques vous apporte les dernières nouvelles et découvertes du monde de l\'astronomie et de l\'exploration spatiale.',
        'An.index.quickLinks': 'Liens rapides',
        'An.index.developer': 'Développeur',
        'An.index.legal': 'Légal',
        'An.index.privacyPolicy': 'Politique de confidentialité',
        'An.index.termsOfUse': 'Conditions d\'utilisation',
        'An.index.notifications': 'Notifications',
        'An.index.markAllRead': 'Tout marquer comme lu',
        'An.index.noNotifications': 'Aucune nouvelle notification',
        'An.index.timeAgo': 'Il y a 2 heures',
        
        // New French translations
        'An.reaction.like': 'J\'aime',
        'An.reaction.dislike': 'Je n\'aime pas',
        'An.reaction.comment': 'Commenter',
        'An.reaction.comments': 'Commentaires',
        'An.reaction.share': 'Partager',
        'An.reaction.shareFacebook': 'Partager sur Facebook',
        'An.reaction.shareTwitter': 'Partager sur Twitter',
        'An.reaction.shareLinkedIn': 'Partager sur LinkedIn',
        'An.reaction.shareWhatsApp': 'Partager sur WhatsApp',
        'An.reaction.copyLink': 'Copier le lien',
        'An.reaction.addComment': 'Ajouter un commentaire...',
        'An.reaction.postComment': 'Publier le commentaire',
        'An.reaction.noComments': 'Aucun commentaire. Soyez le premier !',
        'An.reaction.loadingComments': 'Chargement des commentaires...',
    'An.auth.emailPlaceholder': 'Entrez votre email ou nom d\'utilisateur',
    'An.auth.namePlaceholder': 'Entrez votre nom complet',
    'An.auth.usernamePlaceholder': 'Entrez un nom d\'utilisateur',
    'An.auth.passwordPlaceholder': 'Entrez un mot de passe',
    'An.auth.confirmPasswordPlaceholder': 'Confirmez le mot de passe',
        
        'An.auth.login': 'Connexion',
        'An.auth.register': 'Inscription',
        'An.auth.logout': 'Déconnexion',
        'An.auth.profile': 'Profil',
        'An.auth.username': 'Nom d\'utilisateur',
        'An.auth.password': 'Mot de passe',
        'An.auth.email': 'Email ou Nom d\'utilisateur',
        'An.auth.name': 'Nom complet',
        'An.auth.confirmPassword': 'Confirmer le mot de passe',
        'An.auth.rememberMe': 'Se souvenir de moi',
        'An.auth.forgotPassword': 'Mot de passe oublié ?',
        'An.auth.noAccount': 'Pas de compte ?',
        'An.auth.haveAccount': 'Déjà un compte ?',
        'An.auth.signUp': 'S\'inscrire',
        'An.auth.signIn': 'Se connecter',
        'An.auth.agreeTerms': 'J\'accepte les Conditions et la Politique de confidentialité',
        
        'An.validation.required': 'Ce champ est requis',
        'An.validation.email': 'Veuillez entrer un email valide',
        'An.validation.passwordLength': 'Le mot de passe doit contenir au moins 6 caractères',
        'An.validation.passwordMatch': 'Les mots de passe ne correspondent pas',
        'An.validation.usernameLength': 'Le nom d\'utilisateur doit contenir 3 à 20 caractères',
        
        'An.message.loginSuccess': 'Connecté avec succès !',
        'An.message.registerSuccess': 'Compte créé avec succès !',
        'An.message.logoutSuccess': 'Déconnecté avec succès !',
        'An.message.reactionAdded': 'Réaction ajoutée !',
        'An.message.commentAdded': 'Commentaire publié !',
        'An.message.shareSuccess': 'Lien copié dans le presse-papiers !',
        'An.message.error': 'Quelque chose s\'est mal passé. Veuillez réessayer.',
        'An.message.offline': 'Vous êtes hors ligne. Les modifications se synchroniseront lorsque vous vous reconnecterez.',
        
        'An.stats.likes': 'J\'aime',
        'An.stats.dislikes': 'Je n\'aime pas',
        'An.stats.comments': 'Commentaires',
        'An.stats.views': 'Vues',
        'An.stats.shares': 'Partages'
    },
    ar: {
        // Existing Arabic translations
        'An.index.title': 'أخبار الفلك',
        'An.index.language': 'اللغة:',
        'An.index.theme': 'المظهر:',
        'An.index.home': 'الرئيسية',
        'An.index.news': 'الأخبار',
        'An.index.explore': 'استكشف علم الفلك',
        'An.index.missions': 'البعثات',
        'An.index.gallery': 'المعرض',
        'An.index.about': 'حول',
        'An.index.heroTitle': 'استكشاف الكون',
        'An.index.heroText': 'أحدث الاكتشافات والمهام والأحداث الكونية من جميع أنحاء الكون',
        'An.index.exploreBtn': 'استكشف الأخبار',
        'An.index.featuredNews': 'أبرز الأخبار',
        'An.index.allNews': 'جميع الأخبار',
        'An.index.globalNews': 'الأخبار العالمية',
        'An.index.localNews': 'أخبار تونس',
        'An.index.readMore': 'اقرأ المزيد',
        'An.index.eventDetails': 'تفاصيل الحدث',
        'An.index.close': 'إغلاق',
        'An.index.upcomingEvents': 'الأحداث القادمة',
        'An.index.aboutUs': 'معلومات عنا',
        'An.index.aboutText': 'تقدم لك أخبار الفلك آخر الأخبار والاكتشافات من عالم الفلك واستكشاف الفضاء.',
        'An.index.quickLinks': 'روابط سريعة',
        'An.index.developer': 'المطور',
        'An.index.legal': 'قانوني',
        'An.index.privacyPolicy': 'سياسة الخصوصية',
        'An.index.termsOfUse': 'شروط الاستخدام',
        'An.index.notifications': 'الإشعارات',
        'An.index.markAllRead': 'تحديد الكل كمقروء',
        'An.index.noNotifications': 'لا توجد إشعارات جديدة',
        'An.index.timeAgo': 'قبل ساعتين',
        
        // New Arabic translations
        'An.reaction.like': 'إعجاب',
        'An.reaction.dislike': 'عدم إعجاب',
        'An.reaction.comment': 'تعليق',
        'An.reaction.comments': 'التعليقات',
        'An.reaction.share': 'مشاركة',
        'An.reaction.shareFacebook': 'مشاركة على فيسبوك',
        'An.reaction.shareTwitter': 'مشاركة على تويتر',
        'An.reaction.shareLinkedIn': 'مشاركة على لينكد إن',
        'An.reaction.shareWhatsApp': 'مشاركة على واتساب',
        'An.reaction.copyLink': 'نسخ الرابط',
        'An.reaction.addComment': 'أضف تعليقاً...',
        'An.reaction.postComment': 'نشر التعليق',
        'An.reaction.noComments': 'لا توجد تعليقات بعد. كن أول من يعلق!',
        'An.reaction.loadingComments': 'جاري تحميل التعليقات...',
    'An.auth.emailPlaceholder': 'أدخل البريد الإلكتروني أو اسم المستخدم',
    'An.auth.namePlaceholder': 'أدخل الاسم الكامل',
    'An.auth.usernamePlaceholder': 'أدخل اسم المستخدم',
    'An.auth.passwordPlaceholder': 'أدخل كلمة المرور',
    'An.auth.confirmPasswordPlaceholder': 'تأكيد كلمة المرور',
        
        'An.auth.login': 'تسجيل الدخول',
        'An.auth.register': 'تسجيل',
        'An.auth.logout': 'تسجيل الخروج',
        'An.auth.profile': 'الملف الشخصي',
        'An.auth.username': 'اسم المستخدم',
        'An.auth.password': 'كلمة المرور',
        'An.auth.email': 'البريد الإلكتروني أو اسم المستخدم',
        'An.auth.name': 'الاسم الكامل',
        'An.auth.confirmPassword': 'تأكيد كلمة المرور',
        'An.auth.rememberMe': 'تذكرني',
        'An.auth.forgotPassword': 'نسيت كلمة المرور؟',
        'An.auth.noAccount': 'ليس لديك حساب؟',
        'An.auth.haveAccount': 'لديك حساب بالفعل؟',
        'An.auth.signUp': 'إنشاء حساب',
        'An.auth.signIn': 'دخول',
        'An.auth.agreeTerms': 'أوافق على الشروط وسياسة الخصوصية',
        
        'An.validation.required': 'هذا الحقل مطلوب',
        'An.validation.email': 'الرجاء إدخال بريد إلكتروني صالح',
        'An.validation.passwordLength': 'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
        'An.validation.passwordMatch': 'كلمات المرور غير متطابقة',
        'An.validation.usernameLength': 'اسم المستخدم يجب أن يكون بين 3 و20 حرفاً',
        
        'An.message.loginSuccess': 'تم تسجيل الدخول بنجاح!',
        'An.message.registerSuccess': 'تم إنشاء الحساب بنجاح!',
        'An.message.logoutSuccess': 'تم تسجيل الخروج بنجاح!',
        'An.message.reactionAdded': 'تمت إضافة رد الفعل!',
        'An.message.commentAdded': 'تم نشر التعليق!',
        'An.message.shareSuccess': 'تم نسخ الرابط إلى الحافظة!',
        'An.message.error': 'حدث خطأ. يرجى المحاولة مرة أخرى.',
        'An.message.offline': 'أنت غير متصل بالإنترنت. سيتم مزامنة التغييرات عند إعادة الاتصال.',
        
        'An.stats.likes': 'الإعجابات',
        'An.stats.dislikes': 'عدم الإعجاب',
        'An.stats.comments': 'التعليقات',
        'An.stats.views': 'المشاهدات',
        'An.stats.shares': 'المشاركات'
    }
};
// Function to apply translations to the UI
function AN_applyTranslations(language) {
    const lang = AN_translations[language] || AN_translations['en'];
    
    // Translate elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (lang[key]) {
            element.textContent = lang[key];
        }
    });
    
    // Translate elements with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (lang[key]) {
            element.placeholder = lang[key];
        }
    });
    
    // Translate buttons and other elements without data-i18n but with inner text
    document.querySelectorAll('.AN-reaction-label').forEach(element => {
        const parent = element.closest('.AN-reaction-btn');
        if (parent) {
            if (parent.classList.contains('AN-like-btn')) {
                element.textContent = lang['An.reaction.like'];
            } else if (parent.classList.contains('AN-dislike-btn')) {
                element.textContent = lang['An.reaction.dislike'];
            } else if (parent.classList.contains('AN-comment-btn')) {
                element.textContent = lang['An.reaction.comment'];
            } else if (parent.classList.contains('AN-share-btn') && !parent.querySelector('.AN-share-dropdown')) {
                element.textContent = lang['An.reaction.share'];
            }
        }
    });
    
    // Translate share dropdown options
    document.querySelectorAll('.AN-share-option span').forEach(element => {
        const platform = element.closest('.AN-share-option')?.dataset.platform;
        if (platform === 'facebook') {
            element.textContent = lang['An.reaction.shareFacebook'];
        } else if (platform === 'twitter') {
            element.textContent = lang['An.reaction.shareTwitter'];
        } else if (platform === 'linkedin') {
            element.textContent = lang['An.reaction.shareLinkedIn'];
        } else if (platform === 'whatsapp') {
            element.textContent = lang['An.reaction.shareWhatsApp'];
        } else if (platform === 'copy') {
            element.textContent = lang['An.reaction.copyLink'];
        }
    });
    
	// Translate all placeholder texts
	document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(element => {
		const placeholder = element.getAttribute('placeholder');
		// Translate common placeholders
		if (placeholder.includes('Enter email or username')) {
			element.placeholder = lang['An.auth.emailPlaceholder'] || lang['An.auth.email'];
		} else if (placeholder.includes('Add your comment')) {
			element.placeholder = lang['An.reaction.addComment'];
		} else if (placeholder.includes('Enter email')) {
			element.placeholder = lang['An.auth.email'];
		} else if (placeholder.includes('Enter password')) {
			element.placeholder = lang['An.auth.password'];
		} else if (placeholder.includes('Confirm password')) {
			element.placeholder = lang['An.auth.confirmPassword'];
		} else if (placeholder.includes('Full Name')) {
			element.placeholder = lang['An.auth.name'];
		} else if (placeholder.includes('Username')) {
			element.placeholder = lang['An.auth.username'];
		}
	});
    // Update RTL/LTR direction for Arabic
    if (language === 'ar') {
        document.body.classList.add('AN-rtl');
        document.dir = 'rtl';
        document.querySelectorAll('.AN-container, .AN-header-content, .AN-nav-list, .AN-hero-content, .AN-news-grid, .AN-events-list, .AN-footer-content').forEach(el => {
            el.style.textAlign = 'right';
        });
    } else {
        document.body.classList.remove('AN-rtl');
        document.dir = 'ltr';
        document.querySelectorAll('.AN-container, .AN-header-content, .AN-nav-list, .AN-hero-content, .AN-news-grid, .AN-events-list, .AN-footer-content').forEach(el => {
            el.style.textAlign = 'left';
        });
    }
    
    // Update any other dynamic text that might not have data-i18n
    const commentInput = document.getElementById('AN-comment-input');
    if (commentInput && commentInput.placeholder.includes('Add your comment')) {
        commentInput.placeholder = lang['An.reaction.addComment'];
    }
    
    const submitComment = document.getElementById('AN-submit-comment');
    if (submitComment && submitComment.textContent.includes('Post Comment')) {
        submitComment.textContent = lang['An.reaction.postComment'];
    }
}

// Export for modular use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AN_translations };
}