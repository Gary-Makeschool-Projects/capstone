I18n.translations || (I18n.translations = {}),
    (I18n.translations['en-us'] = I18n.extend(
        I18n.translations['en-us'] || {}, {
            about: {
                hero: {
                    subtitle: 'DAN.COM was founded in 2014 and focusses solely on solving the biggest problems that the domain industry faces. Our platform makes a change of control and ownership of domains easier, safer and faster. DAN.COM is rated as the best domain marketplace in the world and fifth best online marketplace overal according to Trustpilot.',
                    title: 'DAN is on a mission to make unused domains accessible to all'
                },
                team: {
                    advisor: 'Our advisors',
                    founder: 'The founders',
                    investor: 'Our investors',
                    title: 'Who we are'
                },
                what: {
                    mission: {
                        body: 'Help buyers find the domain that fits their project & budget best. Provide sellers the tools they need to grow their business.',
                        title: 'Mission'
                    },
                    title: 'What we do',
                    values: {
                        body: "We demand excellence from ourselves in everything we do. Yet we're a tight-knit group of people who consider each other as family.",
                        title: 'Values'
                    },
                    vision: {
                        body: 'To remove all barriers that prevent buyers & sellers of unused domains to connect. Domains should easily & safely change hands.',
                        title: 'Vision'
                    }
                }
            },
            action: {
                add: 'Add',
                add_domains: 'Add domains',
                add_list: 'Add list',
                add_more: 'Add more',
                add_one: 'Add one',
                add_to_list: 'Add to list',
                apply_now: 'Apply now',
                archive: 'Archive',
                back_home: 'Go to home page',
                buy_now: 'Buy now for %{price}',
                buying_option: 'Buying option',
                cancel: 'Cancel',
                checkout: 'Checkout',
                checkout_next_rent_period: 'Checkout next rent period',
                close: 'Close',
                close_popup: 'Close this popup',
                confirm: 'Confirm',
                delete: 'Delete',
                delete_forever: 'Delete forever',
                disable: 'Disable',
                edit: 'Edit',
                enable: 'Enable',
                export_to_csv: 'Export to CSV',
                filters: 'Filters',
                impersonate: 'Impersonate',
                import_domains: 'Import domains',
                issue_payment: 'Issue payment',
                learn_more: 'Learn more',
                load_more: 'Load more',
                load_more_loading: 'Loading',
                mark_as_paid: 'Mark as paid',
                preview: 'Preview',
                print: 'Print',
                publish: 'Publish',
                push_domain: 'Push domain',
                read_less: 'Read less',
                read_more: 'Read more',
                reset_filters: 'Reset filters',
                restore: 'Restore',
                save: 'Save',
                search: 'Search',
                see_domains: 'See domains',
                see_email: 'See email',
                see_profile: 'See profile',
                send_message: 'Send your message',
                share: 'Share',
                show_more: 'Show me more',
                sort_by: 'Sort by',
                submit_offer: 'Submit offer',
                switch_off: 'Do not receive',
                switch_on: 'Receive On',
                toggle: 'Toggle',
                transfer_domain: 'Transfer domain'
            },
            activemodel: {
                attributes: {
                    checkout: {
                        address1: 'Address',
                        address2: 'Address',
                        city: 'City',
                        company: 'Company name',
                        country: 'Country',
                        domain_name: 'Domain name',
                        email: 'Email address',
                        name: 'Full name',
                        phone: 'Phone number',
                        terms: 'Terms of use',
                        zip: 'Postcode/ZIP code'
                    }
                },
                errors: {
                    models: {
                        checkout: {
                            attributes: {
                                vat_number: {
                                    country_code_mismatch: "doesn't match billing country"
                                }
                            }
                        }
                    }
                }
            },
            activerecord: {
                attributes: {
                    client: {
                        background: 'Background image',
                        background_file_size: 'Background image file',
                        bio: 'Bio',
                        company: 'Company name',
                        country_code: 'Country',
                        default_starting_offer: 'Default starting offer',
                        vat_number: 'VAT number'
                    },
                    contact: {
                        email: 'Email address',
                        name: 'Full name',
                        phone: 'Phone number'
                    },
                    conversation: {
                        domain_id: 'Domain name',
                        domain_name: 'Domain name',
                        email: 'Email address',
                        messages: 'Offer',
                        name: 'Full name',
                        phone: 'Phone number',
                        terms: 'Terms of use'
                    },
                    'conversation/messages': { bid: 'Offer' },
                    domain: {
                        buy_now_price: 'Buy now',
                        logo_content_type: 'Logo file type',
                        name: 'Domain name',
                        price_sold: 'Sold for',
                        rent_price: 'Monthly rent',
                        starting_offer: 'Starting offer'
                    },
                    message: {
                        bid: 'Offer',
                        description: 'Message',
                        turn: 'Message'
                    },
                    order: {
                        address1: 'Address',
                        city: 'City',
                        company: 'Company name',
                        country: 'Country',
                        zip: 'Postcode/ZIP code'
                    },
                    user: {
                        current_password: 'Current password',
                        date_of_birth: 'Date of birth',
                        email: 'Email address',
                        first_name: 'First name',
                        last_name: 'Last name',
                        password: 'Password',
                        terms: 'Terms of use'
                    },
                    'user/client': { country_code: 'Country' }
                },
                errors: {
                    curated_list: {
                        background: 'Background',
                        curator: 'Curator',
                        description: 'Description',
                        name: 'Name',
                        published: 'Published'
                    },
                    models: {
                        client: {
                            attributes: {
                                vat_number: {
                                    country_code_mismatch: "doesn't match billing country"
                                }
                            }
                        },
                        conversation: {
                            attributes: {
                                base: {
                                    max_unconfirmed_leads_created: 'You have reached the maximum number of offers you can create. Contact our support team if you need to create more offers'
                                }
                            }
                        },
                        domain: {
                            attributes: {
                                client: {
                                    open_transaction: 'cannot be changed, the domain has open transactions'
                                }
                            }
                        },
                        user: {
                            attributes: {
                                base: {
                                    already_signed_up: 'You are not allowed to create multiple accounts a day at DAN.COM. Contact our support team if you need multiple accounts with us.'
                                }
                            }
                        }
                    }
                },
                models: {
                    client: { one: 'Client', other: 'Clients' },
                    conversation: {
                        one: 'Conversation',
                        other: 'Conversations'
                    },
                    domain: { one: 'Domain name', other: 'Domain names' },
                    message: { one: 'Message', other: 'Messages' },
                    user: { one: 'User', other: 'Users' }
                }
            },
            admin: {
                menu: {
                    admin: 'Admin',
                    administration: 'Administration',
                    affiliate_backgrounds: 'Affiliate backgrounds',
                    clients: 'Clients',
                    curated_lists: 'Curated lists',
                    dashboard: 'Dashboard',
                    delivered_emails: 'Emails',
                    domain_bulks: 'Bulk actions',
                    domains: 'Portfolio',
                    home: 'Home',
                    orders: 'Installments',
                    payouts: 'Payouts',
                    popular_domains: 'Popular Domains',
                    profile: 'Your profile',
                    revenues: 'Revenue',
                    sales_activity: 'Sales activity',
                    settings: 'Settings',
                    signout: 'Logout',
                    tasks: 'Tasks'
                },
                orders: {
                    index: {
                        title: {
                            completed_or_canceled: 'Completed or canceled',
                            late: 'Late',
                            pending: 'Pending payment'
                        }
                    },
                    show: { title: 'Payments' }
                },
                settings: {
                    newsletter: 'Unsubscribe from receiving our newsletter (once every 3 months), tips (only for new users) and announcements.'
                },
                support: {
                    tasks: {
                        actions: {
                            assign: 'Assign',
                            complete: 'Complete',
                            mark_later: 'Later',
                            mark_read: 'Mark Read',
                            mark_unread: 'Mark Unread',
                            unassign: 'Unassign',
                            undo_later: 'Undo Later'
                        },
                        status: {
                            open_tasks: '%{amount} open tasks',
                            shown_tasks: ',%{amount} shown tasks'
                        },
                        tags: {
                            buyer: { name: 'buyer' },
                            price: { name: 'price' },
                            seller: { name: 'seller' },
                            type: { name: 'type' }
                        },
                        type: {
                            collect_payment: {
                                message: 'Buyer %{buyer} is %{hours} hours late in payment.',
                                name: 'collect',
                                subject: 'Collect payment for %{domain}'
                            },
                            escrow_automatic_ping: {
                                message: 'The seller %{seller} is over %{hours} hours late in delivering the domain.',
                                name: 'escrow late',
                                subject: 'Seller of %{domain} is slow to deliver'
                            },
                            escrow_contact_buyer_and_seller: {
                                message: 'Payment received from %{buyer}, requires manual handling.',
                                name: 'escrow contact',
                                subject: 'Handle manual escrow for %{domain}'
                            },
                            handle_payout: {
                                message: 'A payment of %{price} from buyer %{buyer} to seller %{seller}.',
                                name: 'handle payout',
                                subject: 'Handle payout for %{domain}'
                            },
                            payout_installment: {
                                message: 'Handle the payout of %{price} for installment %{installment_number} of %{installment_total_number}.',
                                name: 'payout installment',
                                subject: 'Installment payout for %{domain}'
                            },
                            payout_rental: {
                                message: 'Handle the payout of a rental of %{price} for the period %{period}.',
                                name: 'payout rental',
                                subject: 'Rental payout for %{domain}'
                            },
                            respond_to_escrow_message: {
                                message: '%{buyer}: %{message}.',
                                name: 'escrow respond',
                                subject: 'Respond to buyer for escrow of %{domain}'
                            },
                            respond_to_payment_related_message: {
                                message: '%{seller}: %{message}.',
                                name: 'payment message',
                                subject: 'Incoming payment message for %{domain}'
                            },
                            respond_to_payout_related_message: {
                                message: '%{seller}: %{message}.',
                                name: 'payout message',
                                subject: 'Incoming payout message for %{domain}'
                            },
                            respond_to_rent_related_message: {
                                message: '%{user}: %{message}.',
                                name: 'rent message',
                                subject: 'Incoming rent message for %{domain}'
                            }
                        }
                    }
                }
            },
            brand: {
                account: {
                    bank: 'ABN Amro',
                    bic: 'ABNANL2A',
                    country: 'The Netherlands',
                    iban: 'NL69 ABNA 0825 6494 47',
                    name: 'Undeveloped BV'
                },
                address: 'Undeveloped BV\nNieuwe Herengracht 47\n1011 RN Amsterdam\nNetherlands\n',
                chamber_of_commerce: 'Chamber of commerce: ',
                company: 'Undeveloped BV',
                copyright: '\xa9 %{year} \u2013 All rights reserved',
                domain: 'dan.com',
                email: 'support@dan.com',
                facebook: 'undevelopednl',
                linkedin: 'undeveloped-nl',
                name: 'DAN.COM',
                nameservers: 'ns1.dan.com\nns2.dan.com\n',
                phone: '+1 737 218 6046',
                registration_number: 61079049,
                terms_address: 'Nieuwe Herengracht 47, (1011 RN) in Amsterdam',
                twitter: 'undeveloped',
                vat_number: 'NL854196468B01'
            },
            bulk_mailer: {
                bulk_exported: {
                    body: 'Your bulk export from %{bulk_action_date} has been successfully processed.\n',
                    call_to_action: '[Download .CSV file](%{url})',
                    subject: 'Bulk export completed'
                },
                bulk_failed: {
                    body: "Your %{bulk_action_downcased} from %{bulk_action_date} has failed.\n\nPlease contact us and we'll help you update your portfolio.\n",
                    subject: '%{bulk_action} failed'
                },
                bulk_finished: {
                    body: 'Your %{bulk_action_downcased} from %{bulk_action_date} has been successfully processed:\n\n  - %{created_count} domains added\n  - %{updated_count} domains updated\n  - %{deleted_count} domains deleted\n  - %{ignored_count} domains ignored\n  - %{failures_count} domains failed\n',
                    call_to_action: '[View report](%{url})',
                    subject: '%{bulk_action} completed'
                }
            },
            bulks: {
                index: { title: 'Bulk imports' },
                result: {
                    created: 'Created',
                    exported: 'Exported',
                    failure: 'Failed',
                    ignored: 'Ignored',
                    updated: 'Updated'
                },
                show: {
                    columns: {
                        buy_now: { new: "New 'Buy now'", old: "Old 'Buy now'" },
                        offer: {
                            new: "New 'Starting offer'",
                            old: "Old 'Starting offer'"
                        }
                    },
                    title: 'Bulk #%{token}'
                },
                status: {
                    done: 'Success',
                    failure: 'Failed',
                    in_progress: 'In progress',
                    todo: 'To do'
                },
                type: {
                    bulk_delete: 'Delete',
                    bulk_export: 'Export',
                    bulk_import: 'Import',
                    bulk_update: 'Update'
                }
            },
            buyer: { country_unknown: 'Country Unknown', ip: 'Buyer IP' },
            buyer_activation_mailer: {
                confirm_your_offer: {
                    body: "I'm contacting you because you placed an offer of %{price} on the domain %{domain} yesterday.\n\nUnfortunately, you haven't confirmed your offer yet. Therefore, the owner of the domain hasn't received your offer yet.\n",
                    call_to_action: '[Confirm your offer](%{url})',
                    note: 'Please contact me if anything is unclear or in case you never placed an offer on this domain.\n',
                    subject: 'Please confirm your offer on %{domain}'
                },
                confirm_your_offer_follow_up: {
                    body: "I'm contacting you for the last time regarding the offer of %{price} you placed on the domain %{domain} a few days ago.\n\n**Your offer will automatically be deleted in 48 hours if you do not confirm it now.**\n",
                    call_to_action: '[Confirm your offer](%{url})',
                    note: 'Please contact me if anything is unclear or in case you never placed an offer on this domain.\n',
                    subject: 'Last chance to confirm your offer on %{domain}'
                },
                finish_buy_now: {
                    body: "I'm contacting you because you started to buy the domain **%{domain}** yesterday but you weren't able to pay.\n\nDid you encounter a problem during checkout?\n\nIf so, please let me know how I can help you.\n",
                    call_to_action: '[Pay securely](%{url})',
                    subject: 'Your purchase - %{domain}'
                },
                finish_buy_now_follow_up: {
                    body: "I'm contacting you because you started to buy the domain **%{domain}** a couple of days ago but weren't able to pay.\n\nPlease proceed to checkout now to avoid any domain delivery delays. This is the final reminder I will send you.\n",
                    call_to_action: '[Pay securely](%{url})',
                    subject: 'Your purchase - %{domain}'
                },
                start_negotiation: {
                    body: "Thank you for placing an offer on the domain %{domain}. We've forwarded your offer to the seller.\n\nThe seller has three options now:\n\n1: To accept your offer. The transaction will be initiated automatically if the seller accepts your offer.\n\n2: To decline your offer. You can place a new counteroffer when your offer is declined.\n\n3: To counter your offer with their asking price for the domain.\n\nOnce the seller replies, you will be invited to your own secure Buyer Control Panel where you can communicate directly with the seller.\n\nHere are some helpful pointers to consider:\n\n**Open dialog**\nCommunicate openly with the seller to see if you can find an agreement. If you need support or advice feel free to ask DAN.COM's team to assist you.\n\n**The right price, for the right name**\nHaving the right brand for your business is very important. Your domain is the foundation of your online presence and can make or break your business.\n\n**Need help?**\nFeel free to reach out to our support team when you have questions or would require our assistance.\n",
                    subject: 'Your offer on %{domain}'
                }
            },
            buyer_after_sales_mailer: {
                sell_your_domains: {
                    body: "You recently bought the domain %{domain} on DAN.COM. I hope you are happy with your purchase and with the services we provided so far.\n\nPlease note that the transfer instructions of the domain have already been sent to you via your Buyer Control Panel.\n\nIf you haven't received your instructions yet, simply reply to this email so we can check what's delaying this transfer.\n\nWe would like to point out that you can also sell the domains you don't use anymore on our marketplace. Adding your domains and setting up an account is really easy. Just click the button below and follow the steps\n",
                    call_to_action: '[Sell your domains](%{url})',
                    note: "Don't hesitate to contact me if you have any other question.\n",
                    subject: 'Sell your domains too'
                }
            },
            buyer_installment_mailer: {
                buyer_in_default: {
                    body: "Since we haven't been able to collect the installment payment No %{installment_number} from you, you're now officially in default. The transaction can now be canceled by our team. Please note that your DNS settings will be removed from the domain.\n",
                    subject: 'Access to %{domain} has been revoked!'
                },
                payment_failure: {
                    body: 'Unfortunately, we haven\u2019t been able to secure installment payment No %{installment_number} from you for your purchase of %{domain}. Please proceed and complete the payment within 24 hours by using the payment link below:\n\nPlease note that the contract will be terminated and your access to the DNS of the domain revoked if we can\u2019t secure this installment payment within timely fashion.\n',
                    call_to_action: '[Checkout](%{checkout_url})',
                    subject: 'Payment reminder for %{domain}'
                },
                payment_reminder: {
                    body: "Unfortunately, we haven't been able to secure installed payment No %{installment_number} from you for your purchase of %{domain}. Please proceed and complete the payment within 24 hours by using the payment link below:\n\nPlease note that the contract will be terminated in 3 days and your access to the DNS of the domain revoked if we can't secure this installment payment timely.\n",
                    call_to_action: '[Checkout](%{checkout_url})',
                    subject: 'Important! Payment reminder for %{domain}'
                },
                payment_reminder_final: {
                    body: "This is an urgent reminder that you're about to lose access to the domain name %{domain}. We haven't been able to secure the installment No %{installment_number} installment. If we haven't secured the payment in the next 48 hours the transaction will be canceled, your access to the DNS settings of the domain will be revoked and the already received funds will be turned into rental fees as stated in the contract.\n\nProceed to checkout now to avoid losing access to the domain\n",
                    call_to_action: '[Checkout](%{checkout_url})',
                    subject: "Urgent! You're about to lose access to %{domain}"
                },
                payment_success: {
                    body: "We've just secured installment payment (%{installment_number}/%{installment_total_number}) for your purchase of %{domain}.\n",
                    call_to_action: '[Invoice](%{invoice_url})',
                    subject: 'Payment for %{domain} received'
                },
                will_be_charged: {
                    body: "Please note that the next installment payment for your purchase of %{domain} is due in three days.\n\nThis is just a heads-up, you don't have to do anything. We'll automatically credit the next installment from the initial payment source you used.\n",
                    subject: 'Next payment for %{domain} due in three days'
                },
                will_be_due: {
                    body: 'Please be informed that your next installment payment for your purchase of %{domain} will be due in three days.\n\nYou can use the following checkout link to complete your payment:\n',
                    call_to_action: '[Proceed to checkout](%{checkout_url})',
                    note: 'Please note that we have to work with strict deadlines. The contract will be terminated and your access to the DNS of the domain revoked if we can\u2019t secure this installment payment within the agreed timeframe.',
                    subject: 'Installment payment for %{domain} is due in three days'
                }
            },
            buyer_rent_period_mailer: {
                buyer_in_default: {
                    body: "Because we haven't been able to collect the payment for rent period %{human_readable_period} from you, you're now officially in default. The transaction can now be canceled by our team without any further notice. Please note that your DNS settings will be removed from the domain and the domain will be returned to the owner.",
                    subject: 'Your rental agreement for %{domain} is terminated!'
                },
                payment_failure: {
                    body: 'Unfortunately, we haven\u2019t been able to secure the payment for rent period %{human_readable_period} of %{domain}. Please proceed and complete the payment right away by using the payment link below:\n\nPlease note that the contract will be terminated and your access to the DNS of the domain revoked if we can\u2019t secure this rent period payment within timely fashion.\n',
                    call_to_action: '[Checkout](%{checkout_url})',
                    subject: 'Payment for rent period %{human_readable_period} of %{domain} failed'
                },
                payment_reminder_final: {
                    body: "This is an urgent reminder that you're about to lose access to the domain name %{domain}. We haven't been able to secure the payment for rent period %{human_readable_period} . If we haven't secured the payment in the next 48 hours the transaction will be canceled and your access to the DNS settings of the domain will be revoked.\n\nProceed to checkout now to avoid losing access to the domain\n",
                    call_to_action: '[Checkout](%{checkout_url})',
                    subject: "Urgent! You're about to lose access to %{domain}"
                },
                payment_success: {
                    body: "We've just secured rent period payment for %{human_readable_period} for your rent of %{domain}.",
                    call_to_action: '[Invoice](%{invoice_url})',
                    subject: 'Payment for rent period %{human_readable_period} for renting %{domain} received'
                },
                will_be_charged: {
                    body: "Please note that the next rent price payment deadline for %{domain} is due in 10 days.\n\nThis is just a heads-up, you don't have to do anything. We'll automatically credit the next rent period from the initial payment source you used.\n",
                    subject: 'Next payment for renting %{domain} is due in 10 days'
                }
            },
            captcha: {
                errors: {
                    blocked_signup: 'Your adblocker is blocking our captcha, please allow it so you can complete the signup',
                    captcha_unreachable: 'Captcha verification server error, please try again.',
                    verification_failed: 'Captcha verification failed, please try again.'
                }
            },
            client_mailer: {
                domains_transferred_to_new_owner: {
                    body: 'We have just transferred the following domains from your account to the account of the new owner(s).\n\n%{domains}\n',
                    call_to_action: '[Open report](%{url})',
                    note: 'The new owner automatically verified the ownership of the above domains via a new method to automatically validate domain ownership. If you also would like to automatically transfer domains go to the [Automated ownership verification](%{ownership_url}) page.\n',
                    subject: 'Domains are moved out of your account'
                },
                domains_transferred_to_your_account: {
                    body: 'We have just transferred the following domains to your account automatically:\n\n%{domains}\n',
                    call_to_action: '[Open report](%{url})',
                    note: 'If you have any questions, please contact our support team for assistance.',
                    subject: 'Domains are added to your account'
                },
                more_domains: {
                    one: '... and %{count} more domain',
                    other: '... and %{count} more domains'
                }
            },
            client_transfers: {
                direction: {
                    away: {
                        one: '%{count} domain is moved out of your account automatically',
                        other: '%{count} domains have been moved out of your account automatically'
                    },
                    label: 'Direction',
                    to: {
                        one: '%{count} domain is moved into your account automatically',
                        other: '%{count} domains have been moved into your account automatically'
                    }
                },
                title: 'Domain account change report'
            },
            clients: {
                billing_info_incomplete: "Billing info incomplete! Seller can't reply to any leads, and amounts might be incorrect during checkout.",
                eligible_for_automated_payout: 'This seller can be paid out automatically',
                index: { title: 'Clients' },
                show: {
                    vat: { invalid: 'Invalid format', valid: 'Valid format' },
                    view_details: 'View details'
                }
            },
            colors: { blue: 'Blue', green: 'Green', purple: 'Purple' },
            confirmation: {
                delete: 'Are you sure that you want to delete %{object_name}?',
                restore: 'Are you sure that you want to restore %{object_name}?'
            },
            confirmations: {
                mute: {
                    caution: 'Important: you will never be notified about this conversation again.',
                    title: 'This conversation was muted successfully'
                },
                unsubscribe: {
                    caution: 'Important: you will never receive emails from us again.',
                    title: 'You unsubscribed successfully'
                }
            },
            contact: { title: 'Contact us' },
            contact_mailer: {
                contact: {
                    body: 'We just received a message from **%{name}** in our contact page!\n\n"*%{message}*"\n',
                    call_to_action: '[Reply to %{name}](%{url})',
                    subject: 'New message - Contact page'
                }
            },
            conversation_mailer: {
                buyer_control_panel_instructions: {
                    body: 'Domain buyer at DAN.COM do not have to create an account with us. All communication between you, us and the seller will be handled via your own Buyer Control Panel.\n\nYour Buyer Control Panel for the domain **%{domain_name}** can only be accessed via this unique url:\n\n%{url}\n\nand you can only login with the following secret token: **%{key}**\n\nIf you have any questions, please contact our support team for assistance.\n',
                    subject: 'How to access your Buyer Control Panel - %{domain_name}'
                },
                notify_acceptance: {
                    body: "The seller of **%{domain_name}** has accepted your offer. We're looking forward to assist you with becoming the new owner of the domain!\n\nMy name is %{sender_name}, I'm your escrow agent for this transaction. I'm here to ensure a smooth, swift and secure transaction for both you and the seller.\n\nThe process works as follows:\n\n1. you proceed to checkout to pay\n\n2. the received funds are held in escrow by DAN.COM\n\n3. Once we've secured the payment, we assist you with becoming the new owner of the domain\n\n4. once you have full control and ownership over your newly acquired domain, we proceed and pay out the seller.\n\nTo avoid any delays please proceed to checkout now:\n",
                    call_to_action: '[Pay securely](%{url})',
                    note: 'Do you have questions? Reply to this email or give me a call!',
                    subject: 'New message - %{domain_name}'
                },
                notify_add_lead: {
                    body: '\nYou\u2019ve recently shown interest in the domain name **%{domain_name}**. This domain is exclusively for sale at the domain marketplace & escrow service **DAN.COM**.\n\nThe owner of the domain would like to negotiate any potential deal between the two of you via our free & easy to use negotiation system.\n\nPlease verify your mutual consent and offer of %{price} to start a negotiation by clicking on the confirmation button below.\n',
                    call_to_action: '[Confirm Interest](%{url})',
                    note: 'Please note that when you confirm your interest that you also accept [the terms of use of DAN.COM](%{tos_url}). If you have any questions, feel free to reach out to us.\n\nIf you\u2019re not interested in the domain anymore, simply ignore this message.\n',
                    subject: 'Confirm Interest - %{domain_name}'
                },
                notify_add_transaction: {
                    body: 'You\u2019ve recently agreed to purchase the domain **%{domain_name}** for %{price}. The domain owner wishes to complete this transaction via the domain escrow service **DAN.COM**.\n\nPlease verify your mutual consent to start this transaction by clicking on the confirmation button below.\n',
                    call_to_action: '[Confirm Transaction](%{url})',
                    note: 'Please note that when you click on the button above that you also accept [the terms of use of DAN.COM](%{tos_url}). If you have any questions, feel free to reach out to us.\n',
                    subject: 'Confirm Transaction - %{domain_name}'
                },
                notify_buyer: {
                    body: 'The seller of the domain name **%{domain_name}** just sent you a new message!\n',
                    call_to_action: '[View details](%{url})',
                    subject: 'New message - %{domain_name}'
                },
                notify_buyer_counter_offer_revoked: {
                    body: 'The counter offer of %{price} that you received earlier for the domain %{domain} has expired.\n\nKeep the negotiation going by sending the seller a new counteroffer to consider.\n',
                    call_to_action: '[Respond to the seller](%{url})',
                    subject: 'Counter offer on %{domain} has expired'
                },
                notify_buyer_new_key: {
                    body: 'You\u2019ve requested to reset your Buyer Control Panel Key. If you haven\u2019t requested this, please notify us.\n\nHere\u2019s your new Key: %{key}\n',
                    greetings: 'Hi %{recipient_name},',
                    subject: 'Reset Buyer Control Panel Key',
                    team: 'Team %{brand}',
                    unsubscribe: "Don't like these emails? [Unsubscribe](%{unsubscribe_url})",
                    unsubscribe_and_mute: '[Unsubscribe](%{unsubscribe_url}) from all emails, or [mute](%{mute_url}) this conversation only.'
                },
                notify_confirmation: {
                    body: 'You are receiving this email because you showed interest in the domain name **%{domain_name}**.\n\nPlease confirm your email address so we can notify you when the seller replies.\n',
                    call_to_action: '[Confirm your email](%{url})',
                    subject: 'Confirm your email address - %{domain_name}'
                },
                notify_domainer: {
                    acceptance: {
                        body: '**%{buyer_name}** just accepted your counter offer of **%{price}** on the domain name **%{domain_name}**!\n\nWe will notify you about the next step as soon as we have received the purchase price.\n',
                        call_to_action: '[View transaction](%{url})',
                        subject: 'Counter offer accepted - %{domain_name}'
                    },
                    ask_auth_code: {
                        body: 'Can you please submit the authorization code of **%{domain_name}** via our secure form?\n',
                        call_to_action: '[Submit authorization code](%{url})',
                        subject: 'Authorization code request - %{domain_name}'
                    },
                    ask_push_or_transfer: {
                        body: 'How would you like to transfer the domain **%{domain_name}**?\n',
                        call_to_action: '[Select transfer option](%{url})',
                        subject: 'Select transfer option - %{domain_name}'
                    },
                    buy_in_installments: {
                        body: 'You just sold the domain name **%{domain_name}** for **%{price}** in %{number_of_installments} monthly installments!\n',
                        call_to_action: '[View transaction](%{url})',
                        subject: 'Buy now - Installments - %{domain_name}'
                    },
                    buy_now: {
                        body: 'You just sold the domain name **%{domain_name}** for **%{price}**!\n',
                        call_to_action: '[View transaction](%{url})',
                        subject: 'Buy now - %{domain_name}'
                    },
                    counter_offer: {
                        body: '**%{buyer_name}** has sent you a counter offer of **%{price}** for the domain name **%{domain_name}**.\n',
                        call_to_action: '[Reply to counter offer](%{url})',
                        subject: 'Counter offer - %{domain_name}'
                    },
                    domain_transferred: {
                        body: 'The domain name **%{domain_name}** was just transferred.\n\nYou will receive your payout within 1 business day.\n',
                        call_to_action: '[View transaction](%{url})',
                        subject: 'Domain transferred - %{domain_name}'
                    },
                    first_rent_received: {
                        body: 'We have secured the rent fee for the period %{human_readable_period} of your domain %{domain}. We will now need to take the domain with us in escrow. You\u2019ll receive instructions from your escrow agent soon. Once the domain is transferred to us, you will be paid out.\n',
                        subject: 'Rental fee for rent period %{human_readable_period} secured!'
                    },
                    installment_cancelled: {
                        body: 'Unfortunately, we had to cancel the transaction for your sale of **%{domain_name}** in installments.\n\nThe domain will be returned to you shortly.\nKind regards,\n',
                        call_to_action: '[View transaction](%{url})',
                        subject: 'Transaction canceled - %{domain_name}'
                    },
                    installment_paid: {
                        body: "We've just secured the installment (%{installment_number}/%{installment_total_number}) for your sale of %{domain}.",
                        call_to_action: '[View transaction](%{url})',
                        subject: 'Installment Payment for %{domain} secured'
                    },
                    installment_payout_sent: {
                        body: "We've just paid out the installment (%{installment_number}/%{installment_total_number}) for your sale of %{domain}.",
                        call_to_action: '[View transaction](%{url})',
                        subject: 'Installment payout sent for %{domain}'
                    },
                    message: {
                        body: '**%{sender_name}** has sent you a new message regarding the domain name **%{domain_name}**.\n\n*"%{message}"*\n',
                        call_to_action: '[Reply to message](%{url})',
                        subject: 'New message - %{domain_name}'
                    },
                    offer: {
                        body: 'You have received a new offer of **%{price}** for the domain name **%{domain_name}**!\n',
                        call_to_action: '[Reply to offer](%{url})',
                        subject: 'New offer - %{domain_name}'
                    },
                    payment_received: {
                        body: "We just received the payment for the domain name **%{domain_name}** from **%{buyer_name}**!\n\nTo get paid out faster it is advised to login to your DAN.COM account and provide us with more details about how you'd like us to manage the transfer.\n",
                        call_to_action: '[View invoice](%{url})',
                        subject: 'Payment received - %{domain_name}'
                    },
                    payment_reminder: {
                        body: 'We have just sent **%{buyer_name}** a payment reminder for the domain **%{domain_name}**.\n',
                        call_to_action: '[View transaction](%{url})',
                        subject: 'Payment reminder - %{domain_name}'
                    },
                    price_request: {
                        body: 'You have a new price request on the domain name **%{domain_name}**!\n',
                        call_to_action: '[View price request](%{url})',
                        subject: 'Price request - %{domain_name}'
                    },
                    rejection: {
                        body: '**%{buyer_name}** declined your counter offer of **%{price}** on the domain **%{domain_name}**.\n',
                        call_to_action: '[Reply to buyer](%{url})',
                        subject: 'Counter offer declined - %{domain_name}'
                    },
                    rent_domain: {
                        body: "You've just rented out the domain **%{domain_name}** for **%{price}** per month!\n",
                        call_to_action: '[View transaction](%{url})',
                        subject: 'Domain Rented - %{domain_name}'
                    },
                    rent_received: {
                        body: "We've just secured the rental period %{period} for %{domain_name}\n",
                        call_to_action: '[View transaction](%{url})',
                        subject: 'Rental Payment for %{domain_name} secured'
                    },
                    rental_cancelled: {
                        body: 'Unfortunately, we had to cancel your rental transaction for **%{domain_name}**.\n\nThe domain will be returned to you shortly.\nKind regards,\n',
                        call_to_action: '[View transaction](%{url})',
                        subject: 'Transaction canceled - %{domain_name}'
                    },
                    seller_response_reminder: {
                        body: '**%{buyer_name}** is waiting for your reply regarding the domain name **%{domain_name}**.\n\nReplying to all inquiries increases your chance of selling the domain significantly.\n',
                        call_to_action: '[Reply to buyer](%{url})',
                        subject: 'Response reminder - %{domain_name}'
                    },
                    transaction_cancelled: {
                        body: 'Unfortunately, we have to cancel the transaction for the the domain name **%{domain_name}**.\n\nSince the buyer is in contractual breach we can provide you with the following info:\n\n- Name: %{buyer_name}\n- Email: %{buyer_email}\n- Phone: %{buyer_phone}\n',
                        call_to_action: '[View transaction](%{url})',
                        subject: 'Transaction canceled - %{domain_name}'
                    },
                    transaction_closed: {
                        body: "We've just sent you the payment of **%{price}** for the domain name **%{domain_name}**.\n\nThis transaction is now completed. Thanks again for using %{brand}!\n",
                        call_to_action: '[View transaction overview](%{url})',
                        subject: 'Transaction closed - %{domain_name}'
                    }
                },
                notify_message_from_transfer_agent: {
                    body: 'Your transfer specialist of the domain **%{domain_name}** just sent you a new message!\n',
                    call_to_action: '[View message](%{url})',
                    subject: 'New message - %{domain_name}'
                },
                notify_receiver_offer_expired: {
                    body: 'The offer of %{price} for the domain %{domain_name} that you had received is expired. We would highly advice you to place a new offer for them to consider.\n',
                    call_to_action: '[Send a message or offer](%{url})',
                    subject: 'The offer you received for %{domain_name} has expired'
                },
                notify_sender_offer_expired: {
                    body: 'Your offer of %{price} for the domain %{domain_name} has expired. We would highly advice you to place a new offer for them to consider.\n',
                    call_to_action: '[Send a message or offer](%{url})',
                    subject: 'The offer you sent for %{domain_name} has expired'
                },
                notify_staff: {
                    body: 'You have a new message from **%{sender_name}** regarding **%{domain_name}**!',
                    call_to_action: '[View details](%{url})',
                    subject: 'New message - %{domain_name}'
                },
                notify_transaction_confirmation: {
                    body: "You have reached an agreement to purchase the domain **%{domain_name}**.\n\nMy name is %{sender_name}, I'm your escrow agent for this transaction. I'm here to ensure a smooth, swift and secure transaction for both you and the seller.\n\nOur process works as follows:\n\n1. you proceed to checkout to pay\n\n2. the received funds are held in escrow by DAN.COM\n\n3. Once we've secured the payment, we assist you with becoming the new owner of the domain\n\n4. once you have full control and ownership over your newly acquired domain, we proceed and pay out the seller.\n\nTo avoid any delays please proceed to checkout now:\n",
                    call_to_action: '[Pay securely](%{url})',
                    note: 'Do you have questions? Reply to this email or give me a call!',
                    subject: 'New message - %{domain_name}'
                },
                pending_counter_offer: {
                    body: 'You still have a pending decision to make in regards of the domain %{domain_name}.\n\nPlease only respond to the counter-offer via the link below:\n',
                    call_to_action: '[Respond now](%{url})',
                    subject: 'Respond To Counter Offer - %{domain_name}'
                },
                send_auth_code: {
                    body: "Please initiate the transfer of %{domain_name} within 24 hours with the following authorization code: **%{auth_code}**\n\nNot sure how to transfer the domain?\nRead our blog post about that here: https://blog.undeveloped.com/how-do-i-transfer-my-domain-6b08fc0d425c#.uzvscn6b2\n\nPlease notify me once you've initiated the transfer so I can accelerate the transfer for you.\n",
                    note: 'Do you have questions? Reply to this email or give me a call!',
                    subject: 'Transfer your new domain - %{domain_name}'
                }
            },
            conversations: {
                action: {
                    acceptance: 'Accept',
                    contact: 'Contact',
                    domain_received: 'Domain received',
                    message: 'Send a message',
                    offer: 'Send a counter offer',
                    payment: 'Pay securely',
                    rejection: 'Decline'
                },
                authorities: {
                    broker: {
                        title: 'Your Transfer Specialist',
                        word: "I'm here to ensure a smooth transaction"
                    },
                    portfolio: {
                        one: '%{count} Domain listed',
                        other: '%{count} Domains listed'
                    },
                    seller: 'The Seller',
                    sold: {
                        one: '%{count} Domain sold',
                        other: '%{count} Domains sold'
                    },
                    support: {
                        title: 'DAN Representative',
                        word: 'Ask me anything via our support.'
                    }
                },
                description: {
                    account_change_initiated_dynadot_com: "Thank you. I've just initiated the domain transfer to your account at Dynadot.\n\nPlease login to your Dynadot account and accept the incoming domain transfer.\n\nOnce you accept the domain in your account the transfer is completed and you can start using the domain right away.\n\nThanks again for using Dan!\n",
                    account_change_initiated_godaddy_com: 'Thank you. I\'ve just initiated the account change at Godaddy.\n\nPlease note that domains transfers at Godaddy can get locked up relatively easy due to their processes. Please follow my instructions below very carefully to avoid delays:\n\n**Step 1:**\n\nFirst, you have to accept the domain transfer via the email Godaddy has sent you to the email address you provided us earlier.\n\n**Step 2:**\n\nAt this step, you have to accept the domain transfer in your Domain Manager at Godaddy. Since this domain is already registered at Godaddy, you have to visit the "Pending account change" section to accept the domain transfer. You can also directly head to this url if you can\'t find the "Pending account changes" section: https://dcc.godaddy.com/transfers/in\n\n**Step 3:**\n\nWhen accepting the domain, Godaddy will show you the contact details of the domain. Do not change or update anything at this step yet! First complete the transfer, once that\'s done edit the ownership records.\n\nYou can also read here how to accept incoming account changes at Godaddy: https://www.godaddy.com/help/accept-a-domain-name-account-change-1670\n\nPlease confirm once you\'ve completed the above action.\n',
                    account_change_initiated_lcn_com: "Thank you. I've just transferred the domain to your account at LCN.\n\nThanks again for using Dan!\n",
                    account_change_initiated_name_com: "Thank you. I've just transferred the domain to your account at Name.com.\n\nThanks again for using Dan!\n",
                    account_change_initiated_namebright_com: 'Thank you. I\'ve just initiated the domain transfer to your account at Namebright.\n\nPlease login to your Namebright account and visit the "Transfer" section to accept the incoming domain transfer.\n\nOnce you accept the domain in your account the transfer is completed and you can start using the domain right away.\n',
                    account_change_initiated_namecheap_com: "Thank you. I've just initiated the domain transfer to your account at Namecheap.\n\nBefore the domain lands in your account, you first have to accept it. Namecheap will send you an email within the next 10 minutes with a link to accept the domain transfer.\n\nThanks again for using Dan!\n",
                    account_change_initiated_namesilo_com: "Thank you. I've just transferred the domain to your account at Namesilo.\n\nThanks again for using Dan!\n",
                    account_change_initiated_park_io: "Thank you. I've just initiated the domain transfer to your account at Park.io.\n\nBefore the domain lands in your account, you first have to accept it. Park.io will send you an email within the next 10 minutes with a link to accept the domain transfer.\n\nThanks again for using Dan!\n",
                    account_change_initiated_porkbun_com: "Thank you. I've just initiated the domain transfer to your account at Porkbun.\n\nBefore the domain lands in your account, you first have to accept it. Porkbun will send you an email within the next 10 minutes with a link to accept the domain transfer.\n\nThanks again for using Dan!\n",
                    account_change_initiated_uniregistry_com: 'Thank you. I\'ve just initiated the domain transfer to your account at Uniregistry.\n\nPlease login to your Uniregistry account and visit the "Transfer" section to accept the incoming domain transfer.\n\nOnce you accept the domain in your account the transfer is completed and you can start using the domain right away.\n\nThanks again for using Dan!\n',
                    first_rent_received: "We've secured your payment to rent the domain %{domain}.\n\nYou will receive an email including the instructions for the use of the domain generally within 1 business day.\n",
                    instruct_buyer_domain_transfer_auth_code: "Please transfer the domain within 24 hours with the following authorization code: __%{auth_code}__\n\nNot sure how to transfer the domain? Read our blog post about that here: https://blog.undeveloped.com/how-do-i-transfer-my-domain-6b08fc0d425c#.uzvscn6b2\n\nPlease notify me once you've initiated the transfer so I can inform the seller.\n",
                    instruct_buyer_domain_transfer_dynadot_com: "The domain %{domain_name} that you\u2019ve acquired is currently registered and managed at the domain registrar Dynadot.com.\n\nTo be able to deliver this domain to you fastest, please follow the next two simple steps:\n\n1: **Please create a (free) Dynadot account** or **skip this step if you already have one.**\n\nthen:\n\n2: **Send us the so called Forum Name (not your username!) that you got assigned to your Dynadot account.** Can't find your Forum Name? Read here how to find it: https://www.dynadot.com/community/help/question/find-forum-name\n\nWithin one business day after receiving the requested above detail, we\u2019ll transfer the domain to your account so you can start managing and using your domain.\n",
                    instruct_buyer_domain_transfer_godaddy_com: 'The domain **%{domain_name}** that you\u2019ve acquired is currently registered and managed at the domain registrar Godaddy.com.\n\nTo be able to deliver this domain to you fastest, please follow the next two simple steps:\n\n1: **Please create a Godaddy.com account** or **skip this step if you already have one.**\n\n2: Send us **the email address** and **customer account number** # assigned to your account by Godaddy.\n\nWithin one business day after receiving the requested above details, we\u2019ll transfer the domain to your account so you can start managing and using your domain.\n\n**Good to know:** Each domain registrar has different processes and specific lock-ins. If you plan to keep the domain at Godaddy, please update the ownership details of the domain to reflect your details. Otherwise, the seller will receive essential emails from Godaddy instead of you.\n\nOr\n\nIf you plan to transfer the domain to another registrar, first check when Godaddy will allow you to transfer the domain to another registrar and only update the administrative records of the domain to reflect your email address. Once the domain is transferred to your selected registrar, immediately update the full registrant records, and you\u2019re all set!\n',
                    instruct_buyer_domain_transfer_intro: "Dear %{name},\n\nI'm Simon, your personal transfer specialist. All communication from this point on are between you and me.\n",
                    instruct_buyer_domain_transfer_lcn_com: 'The domain %{domain_name} that you\u2019ve acquired is currently registered and managed at the domain registrar LCN.com.\n\nTo be able to deliver this domain to you fastest, please follow the next two simple steps:\n\n1: **Please create a (free) LCN account** or **skip this step if you already have one.**\n\nthen:\n\n2: **Send us the email address that you used at LCN.**\n\nWithin one business day after receiving the requested above detail, we\u2019ll transfer the domain to your account so you can start managing and using your domain.\n',
                    instruct_buyer_domain_transfer_name_com: "The domain %{domain_name} that you\u2019ve acquired is currently registered and managed at the domain registrar Name.com.\n\nTo be able to deliver this domain to you fastest, please follow the next two simple steps:\n\n1: **Please create a (free) Name.com account** or **skip this step if you already have one.**\n\nthen:\n\n2: **Send us the account code** that you got assigned by at Name.com. Can't find your account code? Read here how to find it: https://www.name.com/support/articles/205188858-Finding-your-account-code\n\nWithin one business day after receiving the requested above detail, we\u2019ll transfer the domain to your account so you can start managing and using your domain.\n",
                    instruct_buyer_domain_transfer_namebright_com: 'The domain %{domain_name} that you\u2019ve acquired is currently registered and managed at the domain registrar Namebright.com.\n\nTo be able to deliver this domain to you fastest, please follow the next two simple steps:\n\n1: **Please create a (free) Namebright account** or **skip this step if you already have one.**\n\nthen:\n\n2: **Send us both your username and the email address** that you used at Namebright.\n\nWithin one business day after receiving the requested above detail, we\u2019ll transfer the domain to your account so you can start managing and using your domain.\n',
                    instruct_buyer_domain_transfer_namecheap_com: 'The domain %{domain_name} that you\u2019ve acquired is currently registered and managed at the domain registrar Namecheap.com.\n\nTo be able to deliver this domain to you fastest, please follow the next two simple steps:\n\n1: **Please create a (free) Namecheap account** or **skip this step if you already have one.**\n\nthen:\n\n2: **Send us the username** that you used at Namecheap.\n\nWithin one business day after receiving the requested above detail, we\u2019ll transfer the domain to your account so you can start managing and using your domain.\n',
                    instruct_buyer_domain_transfer_namesilo_com: 'The domain %{domain_name} that you\u2019ve acquired is currently registered and managed at the domain registrar Namesilo.com.\n\nTo be able to deliver this domain to you fastest, please follow the next two simple steps:\n\n1: **Please create a (free) Namesilo.com account** or **skip this step if you already have one.**\n\nthen:\n\n2: **Send us your username** that you used at Namesilo.com.\n\nWithin one business day after receiving the requested above detail, we\u2019ll transfer the domain to your account so you can start managing and using your domain.\n\n\nPS: please verify your email address at Namesilo, otherwise we can\u2019t transfer the domain to your account and this transaction will get delayed.\n',
                    instruct_buyer_domain_transfer_outro: 'With kind regards,\n\nSimon\n\nSenior Transfer Specialist at Dan.com\n',
                    instruct_buyer_domain_transfer_park_io: 'The domain %{domain_name} that you\u2019ve acquired is currently registered and managed at the domain registrar Park.io.\n\nTo be able to deliver this domain to you fastest, please follow the next two simple steps:\n\n1: **Please create a (free) Park.io account** or **skip this step if you already have one.**\n\nthen:\n\n2: **Send us the email address and username** that you used at Park.io.\n\nWithin one business day after receiving the requested above detail, we\u2019ll transfer the domain to your account so you can start managing and using your domain.\n',
                    instruct_buyer_domain_transfer_porkbun_com: 'The domain %{domain_name} that you\u2019ve acquired is currently registered and managed at the domain registrar Porkbun.com.\n\nTo be able to deliver this domain to you fastest, please follow the next two simple steps:\n\n1: **Please create a (free) Porkbun account** or **skip this step if you already have one.**\n\nthen:\n\n2: **Send us the username** that you used at Porkbun.\n\nWithin one business day after receiving the requested above detail, we\u2019ll transfer the domain to your account so you can start managing and using your domain.\n',
                    instruct_buyer_domain_transfer_uniregistry_com: 'The domain %{domain_name} that you\u2019ve acquired is currently registered and managed at the domain registrar Uniregistry.com.\n\nTo be able to deliver this domain to you fastest, please follow the next two simple steps:\n\n1: **Please create a (free) Uniregistry.com account** or **skip this step if you already have one.**\n\nthen:\n\n2: **Send us the email address** or **username** that you used at Uniregistry.com.\n\nWithin one business day after receiving the requested above detail, we\u2019ll transfer the domain to your account so you can start managing and using your domain.\n',
                    instruct_installment_dns_settings: 'Until we\u2019ve secured all installments the domain name stays in our escrow holding account.\n\nMeanwhile, you can already start using the domain by providing us the nameservers/DNS settings you\u2019d like to use. Simply send me your records via the messaging option below. We\u2019ll set the right records for you.\n\nPlease let us know if you have any questions.\n',
                    instruct_rental_dns_settings: 'Thank you for using DAN.COM for your domain rental.\n\nWe are currently transferring the domain name to our own domain holding registrar.\n\nMeanwhile, you can already start using the domain by providing us the nameservers/DNS settings you\u2019d like to use. Simply use the message form below. Once we\u2019ve transferred and received your details we will set the right records for you.\n\nPlease let us know if you have any questions left.\n',
                    payment_received: 'Thank you. We\u2019ve received your payment and will now proceed and determine the easiest process to deliver this domain to you. You will receive your transfer instructions shortly.\n',
                    rent_received: 'We have secured the rent fee for the period <strong>%{human_readable_period}</strong>\n'
                },
                form: {
                    counter_offer: { submit: 'Send your counter offer' },
                    message: {
                        placeholder_details: 'Your details',
                        submit: 'Send your message',
                        submit_instructions: 'Send details to your Transfer Specialist',
                        submit_requested_details: 'Please submit the requested details below',
                        submit_to_specialist: 'Send to your Transfer Specialist',
                        talking_to_support: 'Your message will be sent to Simon'
                    }
                },
                history: { button: 'View all', title: 'History' },
                message_link: {
                    anchor: 'send a message',
                    text_html: 'or %{link}'
                },
                pending: { title: 'Pending a decision' },
                sender: {
                    transfer_specialist: '%{name} | your transfer specialist',
                    you: 'You'
                },
                sessions: {
                    forgot_key: {
                        submit: 'Reset your key',
                        title: 'Forgot key'
                    },
                    new: {
                        forgot_key: 'Forgot your key?',
                        submit: 'Open your conversation',
                        subtitle: 'Please login here to manage your domain negotiation and transfer. We\u2019ve sent you your secret key via email.',
                        title: 'Welcome, %{name}',
                        token_placeholder: 'Secret key'
                    }
                },
                subject: {
                    history: {
                        received: {
                            acceptance: 'Your %{bid} offer on %{name} was accepted',
                            account_change_initiated: 'Account change initiated',
                            buyer_offer_expired: 'Your offer has expired',
                            counter_offer: 'You received a %{bid} counter offer on %{name}',
                            counter_offer_revoked: 'The counter offer you received has expired',
                            first_rent_received: 'Rental payment received',
                            instruct_buyer_domain_transfer: 'Domain transfer instructions',
                            instruct_installment_dns_settings: 'Domain instructions',
                            instruct_rental_dns_settings: 'Domain instructions',
                            message: 'You received a message about %{name}',
                            offer: 'You received a %{bid} offer on %{name}',
                            payment_received: 'Payment received',
                            price_response: 'The price for %{name} is %{bid}',
                            rejection: 'Your %{bid} offer on %{name} was declined',
                            rent_received: 'Rental payment received',
                            seller_offer_expired: 'The offer from the seller has expired'
                        },
                        sent: {
                            acceptance: 'You accepted to acquire %{name} for %{bid}',
                            counter_offer: 'You sent a %{bid} counter offer on %{name}',
                            message: 'You sent a message',
                            offer: 'You sent a %{bid} offer on %{name}',
                            price_request: 'You requested the price for %{name}',
                            rejection: 'You declined to acquire %{name} for %{bid}'
                        }
                    },
                    title: {
                        received: {
                            acceptance: 'Your %{bid} offer on %{name} was accepted',
                            account_change_initiated: 'Account change initiated',
                            buyer_offer_expired: 'Your offer has expired',
                            counter_offer: 'You received a %{bid} counter offer on %{name}',
                            counter_offer_revoked: 'The counter offer you received has expired',
                            first_rent_received: 'Rental payment received',
                            instruct_buyer_domain_transfer: 'Transfer the domain',
                            instruct_installment_dns_settings: 'Domain instructions',
                            instruct_rental_dns_settings: 'Domain instructions',
                            message: 'You received a new message about %{name}',
                            offer: 'You received a %{bid} offer on %{name}',
                            payment_received: 'Payment received',
                            price_response: 'The price for %{name} is %{bid}',
                            rejection: 'Your %{bid} offer on %{name} was declined',
                            rent_received: 'Rental payment received',
                            seller_offer_expired: 'The offer from the seller has expired'
                        },
                        sent: {
                            acceptance: 'You accepted to acquire %{name} for %{bid}!',
                            buy_in_installments: 'You acquired %{name} for %{bid} in 6 installments',
                            buy_now: 'Buy %{name} now - Continue your purchase',
                            counter_offer: 'Your %{bid} counter offer on %{name} was sent',
                            message: 'Your message was sent',
                            offer: 'Your %{bid} offer on %{name} was sent',
                            price_request: 'You requested the price for %{name}',
                            rejection: 'You declined to acquire %{name} for %{bid}'
                        }
                    }
                }
            },
            curated_lists: {
                edit: { title: 'Edit curated list' },
                index: { title: 'Curated lists' },
                new: { title: 'New curated list' }
            },
            currency: {
                eur: 'Euro',
                gbp: 'Pound Sterling',
                usd: 'U.S. Dollar'
            },
            dashboard: {
                activity: {
                    conversations: 'Activity',
                    listed: 'Recently listed domains on DAN.COM',
                    see_all: 'See All >',
                    views: 'Your recently viewed domains'
                },
                empty: {
                    domains: {
                        title: 'Your best performing domain names will be displayed here'
                    },
                    helper: {
                        nameservers: {
                            link: 'Set up your For Sale pages',
                            text: 'Your domains attract too little traffic.'
                        },
                        new_domains: {
                            link: 'Add more domain names',
                            text: "You haven't added enough domains yet."
                        },
                        title: 'Why is my dashboard empty?'
                    },
                    sales_activity: {
                        title: 'Your latest offers will be displayed here'
                    }
                },
                last_month: 'Last month',
                leads_this_month: 'Leads this month',
                news: 'Latest blog post',
                popular_domains: {
                    candidates: 'Domains candidate for homepage',
                    home_selected: 'Domains visible on homepage'
                },
                rentals: 'Rented domains',
                rentals_this_month: 'Rentals this month',
                revenue: {
                    last_month: 'Last month',
                    parked: 'Parked',
                    recurring_revenue: 'Recurring this month',
                    this_month: 'This month',
                    title: 'Revenue',
                    total: 'Total Overall',
                    total_this_month: 'Total this month'
                },
                search_placeholder: 'Enter a keyword or domain here and hit enter',
                traffic: { monthly_views: 'monthly views', title: 'Traffic' },
                transactions_this_month: 'Transactions this month',
                welcome: 'Welcome to your dashboard, %{name}'
            },
            date: {
                abbr_day_names: [
                    'Sun',
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat'
                ],
                abbr_month_names: [
                    null,
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                day_names: [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday'
                ],
                formats: {
                    default: '%Y-%m-%d',
                    long: '%B %d, %Y',
                    month_short: '%b, %Y',
                    short: '%b %e'
                },
                month_names: [
                    null,
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ],
                never: 'Never',
                order: ['month', 'day', 'year'],
                yesterday: 'Yesterday'
            },
            datetime: {
                distance_in_words: {
                    about_x_hours: {
                        one: 'about 1 hour',
                        other: 'about %{count} hours'
                    },
                    about_x_months: {
                        one: 'about 1 month',
                        other: 'about %{count} months'
                    },
                    about_x_years: {
                        one: 'about 1 year',
                        other: 'about %{count} years'
                    },
                    almost_x_years: {
                        one: 'almost 1 year',
                        other: 'almost %{count} years'
                    },
                    half_a_minute: 'half a minute',
                    less_than_x_minutes: {
                        one: 'less than a minute',
                        other: 'less than %{count} minutes'
                    },
                    less_than_x_seconds: {
                        one: 'less than 1 second',
                        other: 'less than %{count} seconds'
                    },
                    over_x_years: {
                        one: 'over 1 year',
                        other: 'over %{count} years'
                    },
                    x_days: { one: '1 day', other: '%{count} days' },
                    x_minutes: { one: '1 minute', other: '%{count} minutes' },
                    x_months: { one: '1 month', other: '%{count} months' },
                    x_seconds: { one: '1 second', other: '%{count} seconds' }
                },
                distance_in_words_ago: {
                    about_x_hours: {
                        one: 'about 1 hour ago',
                        other: 'about %{count} hours ago'
                    },
                    about_x_months: {
                        one: 'about 1 month ago',
                        other: 'about %{count} months ago'
                    },
                    about_x_years: {
                        one: 'about 1 year ago',
                        other: 'about %{count} years ago'
                    },
                    almost_x_years: {
                        one: 'almost 1 year ago',
                        other: 'almost %{count} years ago'
                    },
                    half_a_minute: 'half a minute ago',
                    less_than_x_minutes: {
                        one: 'less than a minute ago',
                        other: 'less than %{count} minutes ago'
                    },
                    less_than_x_seconds: {
                        one: 'less than 1 second ago',
                        other: 'less than %{count} seconds ago'
                    },
                    over_x_years: {
                        one: 'over 1 year ago',
                        other: 'over %{count} years ago'
                    },
                    x_days: { one: '1 day ago', other: '%{count} days ago' },
                    x_minutes: {
                        one: '1 minute ago',
                        other: '%{count} minutes ago'
                    },
                    x_months: {
                        one: '1 month ago',
                        other: '%{count} months ago'
                    },
                    x_seconds: {
                        one: '1 second ago',
                        other: '%{count} seconds ago'
                    }
                },
                prompts: {
                    day: 'Day',
                    hour: 'Hour',
                    minute: 'Minute',
                    month: 'Month',
                    second: 'Seconds',
                    week: 'Week',
                    year: 'Year'
                }
            },
            delivered_emails: { index: { title: 'Emails' } },
            devise: {
                confirmations: {
                    confirmed: 'Your email address has been successfully confirmed.',
                    send_instructions: 'You will receive an email with instructions for how to confirm your email address in a few minutes.',
                    send_paranoid_instructions: 'If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes.'
                },
                failure: {
                    already_authenticated: 'You are already signed in.',
                    inactive: 'Your account is not activated yet.',
                    invalid: 'Invalid login',
                    last_attempt: 'You have one more attempt before your account is locked.',
                    locked: 'Your account is locked.',
                    not_found_in_database: 'Invalid email address or password.',
                    timeout: 'Your session expired. Please sign in again to continue.',
                    unauthenticated: 'You need to sign in or sign up before continuing.',
                    unconfirmed: 'You have to confirm your email address before continuing.'
                },
                mailer: {
                    confirmation_instructions: {
                        subject: 'Confirmation instructions'
                    },
                    reset_password_instructions: {
                        subject: 'Reset password instructions'
                    },
                    unlock_instructions: { subject: 'Unlock instructions' }
                },
                omniauth_callbacks: {
                    failure: 'Could not authenticate you from %{kind} because "%{reason}".',
                    success: 'Successfully authenticated from %{kind} account.'
                },
                passwords: {
                    edit: {
                        button: 'Change your password',
                        subtitle: 'Fill in your new password below',
                        title: 'New password'
                    },
                    new: {
                        button: 'Get reset instructions',
                        subtitle: 'Fill in your email below to receive reset instructions',
                        title: 'Password reset'
                    },
                    no_token: "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
                    send_instructions: 'You will receive an email with instructions on how to reset your password in a few minutes.',
                    send_paranoid_instructions: 'If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.',
                    updated: 'Your password has been changed successfully. You are now signed in.',
                    updated_not_active: 'Your password has been changed successfully.'
                },
                registrations: {
                    destroyed: 'Bye! Your account has been successfully cancelled. We hope to see you again soon.',
                    edit: {
                        analytics: {
                            subtitle: 'Fill in your Google Analytics tracker id and see where your viewers are coming from',
                            title: 'Analytics'
                        },
                        buying_option: {
                            buy_in_installments: 'Installments',
                            buy_now: 'Buy now',
                            make_offer: 'Make offer',
                            make_offer_buy_now: 'Buy now & Make offer',
                            request_price: 'Request price',
                            title: 'Buying options',
                            with_price: 'Domains with price',
                            without_price: 'Domains without price'
                        },
                        captcha_options: {
                            captcha_disabled: 'Disable captcha',
                            captcha_enabled: 'Enable captcha for all visitors',
                            captcha_enabled_for_certain_countries: 'Only enable captcha for high risk visitors',
                            subtitle: 'You can manage here how strictly you enforce your buyers to complete a captcha before they can place an offer. Please note that the higher barrier you set, the harder you make it for real buyers to place a bid.',
                            title: 'Captcha'
                        },
                        client_type: {
                            business: 'Yes',
                            individual: 'No',
                            question: 'Do you represent a company?'
                        },
                        disable_links_to_public_profile: {
                            subtitle: 'Your For Sale pages will not include any links to your public profile.',
                            title: 'Disable links to my public profile on all my For Sale pages'
                        },
                        disable_public_profile: {
                            subtitle: 'Nobody will see your list of domains listed on DAN.COM',
                            title: "I don't want to have a public profile"
                        },
                        display_name_option: {
                            choose_profile_name_first: 'Choose a nickname first',
                            company_name_option: 'Show the name of my company',
                            full_name_option: 'Show my full name',
                            private_name_option: {
                                label: 'Private seller',
                                title: 'Show the default option'
                            },
                            profile_name_option: 'Show my nickname',
                            provide_company_details_first: 'Provide your company details first',
                            question: 'How should your name be displayed?',
                            subtitle: 'This is how your name will be displayed in your public seller profile and For Sale pages.'
                        },
                        financing_options: {
                            buy_in_installments: {
                                subtitle_html: 'Changing this option will override and reset the current settings for <strong>ALL</strong> of your domains.',
                                title: 'Installments'
                            },
                            rent: 'Rent',
                            subtitle: 'Financing options make your domains more affordable and give you monthly recurring revenue.',
                            title: 'Financing options'
                        },
                        ownership: {
                            title: 'Automated Ownership Verification',
                            via_nameservers: {
                                subtitle: 'Add the following nameserver listed below as the third nameservers to complement our standard nameservers for parking.\n\nOnce you\u2019ve added the verification nameservers, we will automatically check daily if you\u2019ve become the new owner of a domain and we\u2019ll add the domain to your account.\n',
                                title: 'Via nameservers'
                            }
                        },
                        redirect_traffic_to_product_pages: {
                            checkbox: 'Redirect your buyers to your internal marketplace for sales pages',
                            subtitle: "By enabling this feature all traffic on your domains will be forwarded to for sales pages hosted on DAN.COM, including live support. When you don't opt-in for this feature, your buyers won't see our live support widget on your for sale pages.",
                            title: 'Host your for sales page on DAN.COM'
                        },
                        seller_option: {
                            seller_disabled: "Don't show anything",
                            seller_enabled_bio: 'Show bio',
                            seller_enabled_domains: 'Show domains',
                            subtitle: "Don't let buyers leave your For Sale page, direct them to your profile.",
                            title: 'Meet the seller'
                        },
                        tooltip: {
                            avatar: 'Only use square pictures of yourself or your company logo. 200 x 200 pixels minimum, 1MB maximum',
                            background: 'Only use high quality royalty free imagery. 500 x 1280 pixels minimum, 2MB maximum',
                            bank_name: 'The name of your bank',
                            bic_number: 'Also referred to as BIC or SWIFT',
                            default_starting_offer: 'This will be the starting offer for all your domain names',
                            financing_options: 'Financing options are only available on paid domains.',
                            iban_number: 'Please submit your bank account number or IBAN number in this field. In case your bank works with a routing number, simply add the routing number before your account number.',
                            no_bio: 'Add a bio to your profile before you can enable this option',
                            password: "Leave this field blank if you don't want to change your password",
                            paypal: 'Fill in this field if you prefer to be paid via PayPal',
                            registration: 'Generally issued by your local Chamber of Commerce',
                            rent_enabled: 'Rent disables all other buying and financing options',
                            vat: 'Also referred to as VAT number. Generally issued by your local tax authorities',
                            vat_option_do_not_show: 'Enable this option to show no traces of VAT at all. This option is useful for private sellers and sellers outside of Europe.',
                            vat_option_exclude: 'Enable this option to add VAT on top of the purchase price.',
                            vat_option_include: 'Enable this option to include VAT (if applicable) in the total price. When enabling this option the VAT (if applicable), will be calculated at the invoice level. This ensures that your buyer won\u2019t be surprised with additional VAT at checkout.'
                        },
                        views_option: {
                            subtitle: 'Showing a graph on your high traffic domains conveys their value to customers.',
                            title: 'Traffic graph',
                            views_disabled: "Don't show anything",
                            views_enabled: 'Always show',
                            views_enabled_if_relevant: 'Only when 100+ monthly views'
                        }
                    },
                    signed_up: 'Welcome! You have signed up successfully.',
                    signed_up_but_inactive: 'You have signed up successfully. However, we could not sign you in because your account is not yet activated.',
                    signed_up_but_locked: 'You have signed up successfully. However, we could not sign you in because your account is locked.',
                    signed_up_but_unconfirmed: 'A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.',
                    update_needs_confirmation: 'You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirm link to confirm your new email address.',
                    updated: 'Your account has been updated successfully.'
                },
                sessions: {
                    already_signed_out: 'Signed out successfully.',
                    new: {
                        button: 'Log in to your account',
                        remember_me: 'Remember me',
                        subtitle: 'Welcome back',
                        title: 'Log in'
                    },
                    signed_in: 'Signed in successfully.',
                    signed_out: 'Signed out successfully.'
                },
                shared: {
                    links: { password_forgotten: 'Forgot your password?' }
                },
                unlocks: {
                    send_instructions: 'You will receive an email with instructions for how to unlock your account in a few minutes.',
                    send_paranoid_instructions: 'If your account exists, you will receive an email with instructions for how to unlock it in a few minutes.',
                    unlocked: 'Your account has been unlocked successfully. Please sign in to continue.'
                }
            },
            devise_mailer: {
                reset_password_instructions: {
                    body: 'You are receiving this email because you requested to change your password.\n\nYou can ignore this email if you did not request it.\n',
                    call_to_action: '[Change password](%{url})',
                    subject: 'Change your password'
                }
            },
            domains: {
                index: {
                    new_domains: 'List more domains',
                    per_page: '%{limit} per page',
                    selection: {
                        action: {
                            all: 'Select all %{count} domains',
                            clear: 'Clear selection'
                        },
                        all: 'All %{count} matching domains are selected.',
                        count: {
                            one: '%{formatted_count} selected',
                            other: '%{formatted_count} selected'
                        },
                        page: 'All %{count} domains on this page are selected.'
                    },
                    tooltip: {
                        delete: 'This domain has been submitted for deletion',
                        edit: 'This domain has been submitted for update',
                        parked: "DAN.COM's For Sale Page is active on this domain",
                        parked_not: "This domain is not using DAN.COM's For Sale pages"
                    }
                },
                menu: {
                    active: 'For sale',
                    all: 'All',
                    auctioned: 'Auctioned',
                    bulk: {
                        delete: 'Delete',
                        edit: 'Edit prices',
                        export: 'Export',
                        mark_sold: 'Mark as sold',
                        more: 'More'
                    },
                    deleted: 'Deleted',
                    header: {
                        clients: 'Client',
                        status: 'Status',
                        tld: 'Extension'
                    },
                    importer: {
                        add: 'Add domains',
                        button: 'Domain importer',
                        delete: 'Delete domains',
                        edit: 'Edit prices'
                    },
                    rented: 'Rented',
                    sold: 'Sold'
                },
                modal: {
                    bulk: {
                        delete: {
                            button: 'Delete forever',
                            subtitle: {
                                domains: {
                                    one: 'You are about to delete this domain:',
                                    other: 'You are about to delete the following domains:'
                                },
                                filters: {
                                    one: 'You are about to delete the domains matching the following criterion:',
                                    other: 'You are about to delete the domains matching the following criteria:'
                                }
                            },
                            title: {
                                one: 'Delete this domain',
                                other: 'Delete these %{formatted_count} domains'
                            }
                        },
                        edit: {
                            button: 'Apply new prices',
                            buy_now: "New 'Buy now'",
                            offer: "New 'Starting offer'",
                            remove_buy_now: 'Remove buy now',
                            remove_offer: 'Remove starting offer',
                            subtitle: {
                                domains: {
                                    one: 'You are about to edit the prices of this domain:',
                                    other: 'You are about to edit the prices of the following domains:'
                                },
                                filters: {
                                    one: 'You are about to edit the prices of the domains matching the following criterion:',
                                    other: 'You are about to edit the prices of the domains matching the following criteria:'
                                }
                            },
                            title: {
                                one: 'Edit price for this domain',
                                other: 'Edit price for %{formatted_count} domains'
                            }
                        },
                        export: {
                            button: 'Export to .CSV file',
                            subtitle: {
                                domains: {
                                    one: 'You are about to export this domain:',
                                    other: 'You are about to export the following domains:'
                                },
                                filters: {
                                    one: 'You are about to export the domains matching the following criterion:',
                                    other: 'You are about to export the domains matching the following criteria:'
                                }
                            },
                            title: {
                                one: 'Export this domain',
                                other: 'Export these %{formatted_count} domains'
                            }
                        },
                        filters: {
                            status: '%{status} status',
                            term: "'%{term}' search term",
                            tld: '%{tld} extension'
                        },
                        less: 'Show less',
                        more: 'and %{count} more'
                    },
                    complete: {
                        add: {
                            button: 'Close',
                            subtitle: "It may take a few minutes if you are adding a lot of domains. You will receive an email when it's done.",
                            title: 'Your domains are being added!'
                        },
                        delete: {
                            button: 'Close',
                            subtitle: "It may take a few minutes if you are deleting a lot of domains. You will receive an email when it's done.",
                            title: 'Your domains are being deleted!'
                        },
                        edit: {
                            button: 'Close',
                            subtitle: "It may take a few minutes if you are editing a lot of domains. You will receive an email when it's done.",
                            title: 'Your prices are being edited!'
                        },
                        export: {
                            button: 'Close',
                            subtitle: "It may take a few minutes if you are exporting a lot of domains. You will receive an email when it's done.",
                            title: 'Your domains are being exported!'
                        }
                    },
                    importer: {
                        add: {
                            button: 'Add these domains',
                            content: {
                                line: 'One domain name per line (.txt file)',
                                row: 'One domain per row (.xls or .csv file)'
                            },
                            subtitle: 'Add domains on the left or upload a file on the right',
                            title: 'Add domains to your portfolio'
                        },
                        delete: {
                            button: 'Delete these domains',
                            subtitle: 'Add domains on the left or upload a file on the right',
                            title: 'Delete domains from your portfolio'
                        },
                        edit: {
                            button: 'Edit these domains',
                            content: {
                                buy_now: "For each domain, use a 'Buy now' higher than 'Starting offer'",
                                header: 'Use a header row to indicate the content of each column',
                                offer: "For domains without 'Starting offer', use a 'Buy now' higher than %{starting_offer} (your default 'Starting offer')"
                            },
                            subtitle: 'If a domain is not in your portfolio yet, it will be added',
                            title: 'Edit domain prices'
                        },
                        file: {
                            loading: 'Uploading your file...',
                            upload: 'Upload this file'
                        }
                    },
                    upload: {
                        drop: 'Drop here to upload',
                        title: 'Drop file to upload, or click to browse',
                        uploading: 'Uploading file...'
                    }
                },
                show: {
                    chart: {
                        days: 'Days',
                        months: 'Months',
                        title: 'Domain name visits',
                        weeks: 'Weeks'
                    },
                    description: {
                        placeholder: {
                            call_to_action: 'Click %{link} to add your description here.',
                            text: 'What is special about this domain name?\nLet your buyers know about it!\nAlso, a good description is excellent for Seach Engine Optimization (SEO).\n',
                            title: 'Say something about this domain'
                        },
                        title: 'Description'
                    },
                    edit_form: {
                        affiliate_option: {
                            affiliate_disabled: 'Disabled',
                            affiliate_hybrid: 'Hybrid'
                        },
                        sold: 'Was it sold?'
                    },
                    logo: {
                        add: 'Add a logo',
                        confirm: {
                            delete: 'Are you sure you want to delete the logo for this domain?'
                        },
                        note_html: 'In this section you can bundle your domains with a logo and social media accounts. Adding a logo is only advised for short and brandable domains. Only add a logo if you have a professional designed logo with transparant background. Please don\u2019t add any irrelevant logo\u2019s or social media handles. That can actually hurt your sales. Not a great designer? Simply use a service like <a href="https://www.tailorbrands.com">Tailor Brands</a> to create high quality PNG logo\u2019s for your domains.',
                        title: 'Logo',
                        tooltip: '(Click to enlarge)'
                    }
                }
            },
            error_pages: {
                subtitle: {
                    forbidden: 'You tried to access a page you did not have authorization for with the account you are currently using.',
                    gone: 'You tried to access a page that was deleted and will most likely never never come back.',
                    internal_server_error: "You have encountered an issue with the system. You can try again now or come back later when it's fixed.",
                    not_acceptable: 'Your browser may be using incorrect headers or this type of browser may not be recognized.',
                    not_found: 'You may have mistyped the address or the page may have moved to a new address.'
                },
                title: {
                    forbidden: 'Hey! You are not authorized',
                    gone: 'Hum, this page is gone',
                    internal_server_error: 'Oops, something went wrong',
                    not_acceptable: 'Sorry, your request was declined',
                    not_found: "Oops, this page doesn't exist"
                }
            },
            errors: {
                format: '%{attribute} %{message}',
                messages: {
                    accepted: 'must be accepted',
                    already_confirmed: 'was already confirmed, please try signing in',
                    blank: "can't be blank",
                    confirmation: "doesn't match %{attribute}",
                    confirmation_period_expired: 'needs to be confirmed within %{period}, please request a new one',
                    empty: "can't be empty",
                    equal_to: 'must be equal to %{count}',
                    even: 'must be even',
                    exclusion: 'is reserved',
                    expired: 'has expired, please request a new one',
                    greater_than: 'must be greater than %{count}',
                    greater_than_or_equal_to: 'must be greater than or equal to %{count}',
                    inclusion: 'is not included in the list',
                    invalid: 'is invalid',
                    less_than: 'must be less than %{count}',
                    less_than_or_equal_to: 'must be less than or equal to %{count}',
                    not_a_number: 'is not a number',
                    not_an_integer: 'must be an integer',
                    not_found: 'not found',
                    not_locked: 'was not locked',
                    not_saved: {
                        one: '1 error prohibited this %{resource} from being saved:',
                        other: '%{count} errors prohibited this %{resource} from being saved:'
                    },
                    odd: 'must be odd',
                    other_than: 'must be other than %{count}',
                    present: 'must be blank',
                    record_invalid: 'Validation failed: %{errors}',
                    restrict_dependent_destroy: {
                        many: 'Cannot delete record because dependent %{record} exist',
                        one: 'Cannot delete record because a dependent %{record} exists'
                    },
                    taken: 'has already been taken',
                    too_long: {
                        one: 'is too long (maximum is 1 character)',
                        other: 'is too long (maximum is %{count} characters)'
                    },
                    too_short: {
                        one: 'is too short (minimum is 1 character)',
                        other: 'is too short (minimum is %{count} characters)'
                    },
                    wrong_length: {
                        one: 'is the wrong length (should be 1 character)',
                        other: 'is the wrong length (should be %{count} characters)'
                    }
                },
                template: {
                    body: 'There were problems with the following fields:',
                    header: {
                        one: '1 error prohibited this %{model} from being saved',
                        other: '%{count} errors prohibited this %{model} from being saved'
                    }
                }
            },
            exceptions: {
                numeric_header_error: "You are trying to import domains with prices but your file doesn't have a header row. Please follow the instructions provided in the domain importer."
            },
            flash: {
                error: {
                    activation: {
                        not_activated: 'You can only access this page once you have added your domain names.'
                    },
                    admin: {
                        background: 'Failed to delete profile background.',
                        picture: 'Failed to delete profile picture'
                    },
                    bulk_export: {
                        invalid_bulk: "This bulk export cannot be displayed because it doesn't have any .CSV file attached."
                    },
                    conversation: {
                        billing_info_incomplete: 'This lead is disabled because your billing information is incomplete. Please fill in your details under %{name} \u203a Settings.'
                    },
                    curations: {
                        domain_not_found: "The domain couldn't be found",
                        import: 'Domain list is empty'
                    },
                    domains: {
                        assign: {
                            empty: "You haven't added any domain names. Please paste or import your list and try again.",
                            file_format: 'File format incorrect. Please upload a .CSV or .TXT file and try again.',
                            format: {
                                one: '%{count} domain has formatting issues. Please use a valid domain and try again.',
                                other: '%{count} domains have formatting issues. Please use valid domains and separate them correctly.'
                            }
                        },
                        create: {
                            empty: 'No domains provided. Please paste your domains or upload a file and try again.',
                            file_format: 'File format incorrect. Please upload a .CSV or .TXT file and try again.',
                            format: {
                                one: '%{count} domain has formatting issues. Please use a valid domain and try again.',
                                other: '%{count} domains have formatting issues. Please use valid domains and separate them correctly.'
                            }
                        },
                        logo: { delete: 'Logo could not be deleted.' },
                        restore: 'Failed to restore. Please check if the domain already exists in your account.',
                        update: {
                            not_allowed: 'You are not allowed to update this domain'
                        }
                    },
                    installments: {
                        paid: 'Failed to mark installment as paid.'
                    },
                    orders: {
                        payment: {
                            refused: 'Your payment is refused by our system. Please call your card issuer to solve the problem.'
                        }
                    },
                    settings: {
                        billing_info_incomplete: 'Your billing information is incomplete. Please fill in your details under %{name} \u203a Settings.'
                    }
                },
                success: {
                    admin: {
                        background: 'Your profile background was deleted successfully.',
                        picture: 'Your profile picture was deleted successfully.'
                    },
                    conversation: {
                        add_lead_confirmed: 'You successfully confirmed your interest.',
                        add_transaction_confirmed: 'You successfully confirmed the transaction.',
                        lead_created_successfully: 'Lead was created successfully. We will send the buyer a confirmation email.',
                        transaction_created_successfully: 'Transaction was created successfully. We will send the buyer a confirmation email.'
                    },
                    curated_lists: {
                        create: 'Curated list created successfully.',
                        destroy: 'Curated list destroyed successfully.',
                        publish: 'Curated list published successfully.',
                        update: 'Curated list updated successfully.'
                    },
                    curations: {
                        create: 'Curation created successfully.',
                        destroy: 'Curation destroyed successfully.',
                        import: {
                            one: '1 domain imported successfully.',
                            other: '%{count} domains imported successfully'
                        }
                    },
                    domains: {
                        assign: {
                            one: '%{count} domain assigned to %{broker}.',
                            other: '%{count} domains assigned to %{broker}.'
                        },
                        create: {
                            one: '%{count} domain listed successfully.',
                            other: '%{count} domains listed successfully.'
                        },
                        epik: {
                            one: 'We have found %{count} domain in your Epik account and added it below for easy import.',
                            other: 'We have found %{count} domains in your Epik account and added them below for easy import.'
                        },
                        logo: { delete: 'Logo was deleted successfully.' },
                        restore: 'Domain restored successfully.'
                    },
                    installments: { paid: 'Installment marked as paid.' }
                },
                warning: {
                    closed_after_work_hours: 'Please note that our offices are closed at the moment. Our transfer specialists are charging up and will handle your transaction tomorrow!',
                    closed_in_weekend: 'Please note that our offices are closed in the weekend. We will get back to you on Monday.',
                    curations: {
                        failed: {
                            one: '1 domain failed to import: %{domains}',
                            other: '%{count} domains failed to import: %{domains}'
                        }
                    },
                    domains: {
                        assign: {
                            ignored: {
                                one: '%{count} domain name is already assigned to %{broker} or another broker.',
                                other: '%{count} domain names are already assigned to %{broker} or another broker.'
                            }
                        },
                        create: {
                            ignored: {
                                one: '%{count} domain name is already listed on our marketplace another user (or by you). Please contact us!',
                                other: '%{count} domain names are already listed on our marketplace by another user (or by you). Please contact us!'
                            }
                        }
                    },
                    impersonate: {
                        current: 'You are impersonating %{seller_name}',
                        stop: 'Stop impersonation'
                    }
                }
            },
            footer: {
                about_us: 'About us',
                auction: {
                    buttons: {
                        close: 'Close',
                        start_bidding: 'Start bidding!'
                    },
                    title: {
                        active: '<b>%{auction_title}</b> currently running! Take a look at the domains now.',
                        upcoming: '<b>%{auction_title}</b> coming soon! Take a look at the domains.'
                    }
                },
                blog: 'Blog',
                buy_a_premium: 'Why buy a premium domain',
                buy_domains: 'Buy domains',
                buyer_guide: 'Domain buyer guide',
                calculator: 'Commission calculator',
                contact: 'Contact',
                help_center: 'Help center',
                home: 'Home',
                how_escrow: 'How does domain escrow work?',
                legal: 'Legal',
                sell_domains: 'Sell domains',
                seller_guid: 'Domain seller guide',
                sitemap: 'Sitemap'
            },
            help_center: {},
            helpers: {
                select: { prompt: 'Please select' },
                submit: {
                    create: 'Create %{model}',
                    submit: 'Save %{model}',
                    update: 'Update %{model}'
                }
            },
            installment_contract: {
                body_html: '<p>\n  The Transferee (domain buyer) and Provider (domain seller) will enter into a domain purchase agreement in installments of the domain name %{domain_name} through the website <a href="https://dan.com" target="_blank">dan.com</a>, described as Escrow Third Party, also known as the Contractor as defined in the general terms of use of DAN.COM. This agreement is an additional agreement that\u2019s only applicable in case of a domain purchase/sale in installments. By clicking on the button \u201cBuy Now\u201d you agree to this additional installment agreement.\n</p>\n<p>\n  The Parties agree to deposit the Domain Name with the Escrow Third Party under the conditions specified herein;\n</p>\n<p>\n  The Provider and Transferee entered into a purchase agreement of <strong>%{domain_name}</strong> through the website <a href="https://dan.com" target="_blank">dan.com</a>, which is operated by the Escrow Third Party;\n</p>\n<p>\n  <ol>\n    <li>\n      The price of the Domain Name was set at <strong>%{price}</strong> %{vat_option_text} (\u201cPrice\u201d). The Provider and Transferee agreed to an instalment plan of <strong>%{installment_amount}/month</strong> %{vat_option_text} regarding the payment of the Price. The Provider remains the owner of the Domain Name until the Price has been fully paid.\n    </li>\n    <li>\n      The Parties agree to deposit the Domain Name with the Escrow Third Party (escrow third party) under the conditions specified herein and;\n    </li>\n  </ol>\n</p>\n<p>\n  <strong>have agreed as follows:</strong>\n</p>\n<p>\n  <ol>\n    <li>\n      The Transferee and the Provider agreed to installed payment of the Price with a term of <strong>%{number_of_installments}</strong> months to the designated bank account, in some cases via a payment provider of the Escrow Third Party in accordance of the agreed payment deadline. All remaining installed payments have to be received by the Escrow Third Party on the same day of each calendar month. For example: when a transaction is initiated on the 3rd of January 2018, the second payment deadline will be the 3rd of February 2018. The third payment deadline will be on the 3rd of March 2018. These payment periods constitute firm deadlines.\n    </li>\n    <li>\n      The Provider will deposit the Domain Name after the first installment is paid by transferring the Domain Name to the registrar of the Escrow Third Party. The Escrow Third Party shall take all necessary measures on behalf of the Provider to enable the Transferee to use the Domain Name.\n    </li>\n    <li>\n      After the deposit as mentioned in clause 2, the Provider is prohibited to sell the Domain Name to a third party, to pledge the Domain Name as security if such pledge frustrates the (performance of this) agreement, or to act in any other way which is in conflict with this agreement or which may cause damages to the Escrow Third Party and/or the Transferee. If the Provider violates this clause, the Provider shall be liable for all the actual damages caused to the Escrow Third Party and/or the Transferee.\n    </li>\n    <li>\n      The Escrow Third Party functions as an intermediary between the Provider and the Transferee and is not part of the purchase agreement. The Escrow Third Party solely manages the Domain Name in accordance with this agreement and does not in any way grant any credit, nor does it have any legal claims on the Domain Name against the Provider. The Provider and the Transferee shall resolve any conflicts which may arise themselves. The Transferee and the Provider indemnify and hold harmless the Escrow Third Party from any claim made by any (third) party due to or arising out of any breach of contract or any unlawful act.\n    </li>\n    <li>\n      The Provider delivers and deposits the Domain Name under retention of title until the Transferee has paid the Price in accordance with this agreement. If the Price is paid, the Escrow Third Party shall take all necessary measures on behalf of the Provider to transfer the Domain Name to the Transferee.\n    </li>\n    <li>\n      Until all the payment obligations are fulfilled, the Transferee has no legal claim on the Domain Name against the Provider whatsoever. The Transferee is solely entitled to use the Domain Name with due diligence. The Transferee shall not in any way use the Domain Name which in any respect:\n      <ol style="list-style-type: lower-alpha;">\n        <li>\n          is in breach of any law, statute, regulation or by law;\n        </li>\n        <li>\n          is fraudulent, criminal or unlawful;\n        </li>\n        <li>\n          promotes racism, bigotry, hatred or physical harm of any kind against any group or individual;\n        </li>\n        <li>\n          may infringe or breach the copyright or any intellectual property rights (including without limitation copyright, trademark rights and broadcasting rights) or privacy or other rights of the Escrow Third Party or any third party;\n        </li>\n        <li>\n          contains video, audio photographs, or images of another person without his or her permission (or in the case of a minor, the minor\u2019s legal guardian);\n        </li>\n        <li>\n          provides instructional information about illegal activities such as making or buying illegal weapons or drugs, violating someone\u2019s privacy, or providing, disseminating or creating computer viruses;\n        </li>\n        <li>\n          publicizes or promotes commercial activities and/or sales without our prior written consent such as contests, sweepstakes, barter, advertising, and pyramid schemes;\n        </li>\n        <li>\n          involves the use, delivery or transmission of any viruses, unsolicited emails, trojan horses or any other computer programming routines that are intended to damage, detrimentally interfere with, surreptitiously intercept or expropriate any system, data or personal information.\n        </li>\n      </ol>\n    </li>\n    <li>\n        Any (other) illegal activities or any other activities which may cause damages to the Provider or the Escrow Third Party and/or which may decrease the value of the Domain Name are strictly prohibited. Such activities include, without limitations, the use of aggressive SEO strategies, techniques and tactics that focus only on search engines and not a human audience, and usually does not obey search engines guidelines (black hat SEO), such as keyword stuffing, invisible text,\xa0doorway\xa0pages, adding unrelated keywords to the page content or page swapping (changing the webpage entirely after it has been ranked by search engines), and the use of the Domain Name for spam activities.\n    </li>\n    <li>\n        In case of violation of clauses 6 and/or 7 the Transferee shall forfeit without that further notice of default is required a directly and not open to mitigation claimed fine of the equal of twice the Price per violation to be paid to the Provider, notwithstanding the Provider\u2019s or the Escrow Third Party\u2019s right to claim the actual damages. The Transferee is furthermore obligated to limit any damages and/or undo the decreasing of the value of the Domain Name.\n    </li>\n    <li>\n        If the Transferee fails and/or neglects to carry out the terms as set out in this agreement, the Provider may terminate this agreement immediately without prior notice. Retroactively, this agreement will be considered to be a rental agreement and all installments paid are to be considered as rent. After termination of this agreement, the Provider may rent or sell the Domain Name to any party, including competitors of the Transferee.\n    </li>\n    <li>\n        This agreement shall terminate immediately without prior notice if the Transferee suffers bankruptcy. If the Provider suffers bankruptcy and the first installment has been paid, the Domain Name shall be transferred to the Transferee immediately. The Escrow Third Party shall take all necessary measures on behalf of the Provider to transfer the Domain Name to the Transferee.\n    </li>\n    <li>\n        Parties herewith expressly relinquish the right to invoke the dissolution of the present agreement, on whatever grounds.\n    </li>\n    <li>\n        This agreement shall be governed by the law of the Netherlands. In the event of disputes regarding or related to the agreement concerned, Parties shall exclusively apply to the competent authority in Amsterdam.\n    </li>\n  </ol>\n</p>\n<p>\n  This transaction is initiated at dan.com on <strong>%{transaction_date}</strong>. This contract is only valid if the first installment payment is completed on the same date. This transaction is in compliance with the TOS of dan.com which can be found here: <a href="https://dan.com/terms" target="_blank">https://dan.com/terms</a>\n</p>\n'
            },
            invoice: {
                bank: 'Bank',
                bic: 'BIC',
                billing: 'Escrow Bank Account',
                buyer: 'Domain buyer',
                domain_name: 'Domain name %{name}',
                domain_name_with_installments: 'Installment 1/%{amount} for %{name}',
                domain_name_with_installments_and_number: 'Installment %{number}/%{amount} for %{name}',
                domain_name_with_rent_period: 'Rent period %{human_readable_period} for %{name}',
                escrow: 'Escrow agent',
                iban: 'IBAN',
                invoice: 'Invoice',
                overview: 'Transaction overview',
                parties: 'Parties',
                price: 'Price',
                price_excl: 'Price excl. VAT',
                price_incl: 'Amount incl. VAT %{vat}',
                reference: 'Reference',
                seller: 'Domain seller',
                success_fee: 'Success fee %{fee}',
                success_fee_domain: 'Success fee for %{name} %{fee}',
                success_fee_installment: 'Success fee for installment %{installment_number}/%{installments_count} for %{name} %{fee}',
                success_fee_rent_period: 'Success fee for rent period %{human_readable_period} for %{name} %{fee}',
                total: 'Total',
                undeveloped_details: 'DAN.COM\u2019s Details',
                vat: 'VAT %{vat}'
            },
            invoice_mailer: {
                finance_invoice: {
                    body: 'New invoices were just created for transaction **%{invoice_number}**.\n\nPlease find the attached PDF invoices for the buyer and the seller.\n',
                    call_to_action: '[View transaction](%{url})',
                    subject: 'Invoices %{invoice_number} - %{domain_name}'
                },
                invoice: {
                    body: "Thank you, we\u2019ve secured your payment for the domain **%{domain_name}**.\n\nTo ensure a swift and easy transfer, we will send you tailored transfer instructions, usually within 1 business day.\n\nYour transfer instructions will be delivered to you via our secure Buyer Control Panel and not via e-mail.\n\nGood to know: If you don\u2019t hear back from us after 2 business days, please contact our support team to find out what's causing the delay.\n\nIn the meantime, you can download your invoice below:\n",
                    call_to_action: '[Open invoice](%{url})',
                    greetings: 'Hi %{recipient_name},',
                    subject: 'Invoice %{invoice_number} - %{domain_name}'
                },
                invoice_installment: {
                    body: "We've secured your payment for the domain **%{domain_name}**.\n\nYou will receive an email with the transfer instructions from us usually within 1 business day. If you don't hear back\nfrom us after 2 business days, please contact our support and or check your spambox.\n\nPlease find attached your invoice and additional contract.\n",
                    call_to_action: '[Open invoice](%{url})',
                    subject: 'Invoice %{invoice_number} - %{domain_name}'
                },
                invoice_rent: {
                    body: "We've secured your payment to rent the domain **%{domain_name}**.\n\nYou will receive an email including the instructions for the use of the domain generally within 1 business day. If you don't hear back from us after 2 business days, please contact our support and or check your spam folder.\n\nPlease find attached your invoice and additional contract.\n",
                    call_to_action: '[Open invoice](%{url})',
                    subject: 'Invoice %{invoice_number} - %{domain_name}'
                }
            },
            label: {
                account: {
                    bank_name: 'Bank name',
                    bic_number: 'BIC / SWIFT code',
                    cryptocurrency: 'Cryptocurrency',
                    iban_number: 'Account number/IBAN',
                    name: "Account holder's name",
                    paypal: 'Paypal account'
                },
                actions: 'Actions',
                address: 'Address',
                admin: 'Admin',
                affiliate: 'Affiliate',
                agreement_reached: 'Transaction (agreement reached)',
                all: 'All',
                analytics_tracker: 'Tracker id',
                api_token: 'API token',
                attachment: 'Attachment',
                average_commission: 'Avg. commission',
                average_transaction: 'Avg. transaction',
                background_color: 'Background color',
                background_image: 'Background image',
                bank_transfer: 'Bank transfer',
                bio: 'Bio',
                bitcoin: 'Bitcoin',
                brand: 'Sell a brand package',
                broker: 'Broker',
                business: 'Business',
                buy_domain: 'Buy domain',
                buy_in_installments_enabled: 'Installments',
                buy_now_price: 'Buy now',
                buyer: 'Buyer',
                buyer_vat_from_buyer: 'Calculate VAT based on country of buyer',
                buyer_vat_from_seller: 'Calculate VAT based on country of seller',
                checkbox_yes: 'Yes',
                city: 'City',
                client: 'Client',
                client_plan: { free: 'Free', pro: 'Pro' },
                client_type: 'Type',
                commission: 'Commission',
                commission_rate: 'Commission rate',
                company_name: 'Company name',
                country: 'Country',
                country_code: 'Country code',
                created: 'Created',
                created_at: 'Added on',
                creator: 'Creator',
                cryptocurrency: 'Cryptocurrency',
                cryptocurrency_type: 'Cryptocurrency type',
                cryptocurrency_wallet_address: 'Cryptocurrency wallet address',
                curated_by: 'Curated by',
                curator: 'Curator',
                currency: 'Currency',
                current_password: 'Current password',
                dan_id: 'Your Dan blockchain signature ID: %{dan_id}',
                date: 'Date',
                date_of_birth: 'Date of birth',
                default_starting_offer: 'Default starting offer',
                deleted: 'Deleted',
                description: 'Description',
                disabled: 'Off',
                display_name: 'Displayed as',
                domain: { one: 'Domain', other: 'Domains' },
                domain_count: {
                    one: '%{formatted_count} domain',
                    other: '%{formatted_count} domains'
                },
                domain_name: 'Domain name',
                domains_for_sale: 'Domains for sale',
                due_at: 'Due date',
                email: 'Email',
                email_address: 'Email address',
                enabled: 'On',
                ethereum: 'Ethereum',
                excluding_vat: 'Excluding VAT',
                explore: 'Explore',
                extensions: 'Extensions',
                failed: 'Failed',
                federated_identity: 'Epik login',
                file: 'File',
                first_name: 'First name',
                format: 'Format',
                from: 'From',
                fullname: 'Full name',
                general: 'General',
                handles: {
                    facebook: 'Facebook account',
                    instagram: 'Instagram account',
                    twitter: 'Twitter account'
                },
                highest_sale: 'Highest sale',
                html_email: 'HTML',
                if_applicable: '(if applicable)',
                ignored: 'Ignored',
                import_from_file: 'Import from file',
                individual: 'Consumer',
                installment_count: 'Installment %{current_installment} of %{number_of_installments}',
                installment_settings: 'Installment Settings',
                installments: 'Payments',
                invoices: 'Invoices',
                last_name: 'Last name',
                late: 'Late',
                lead_or_transaction: 'Are you importing a lead or transaction?',
                leads: { one: 'Lead', other: 'Leads' },
                length: 'Length',
                links: 'Links',
                list_of_domains: 'List of domains',
                logo: 'Logo',
                lowest_sale: 'Lowest sale',
                make_offer: 'Make an offer',
                max_accepted_installments: 'Total Installments',
                max_number_of_installments: 'Maximum number of installments',
                member_since: 'Member since %{date}',
                message: 'Message',
                month: 'Month',
                monthly_views: { one: 'Monthly view', other: 'Monthly views' },
                name: 'Name',
                nameservers: 'Nameservers',
                new_password: 'New password',
                next_due_at: 'Next due date',
                none: 'None',
                number_of_transactions: '# of transactions',
                or: 'Or',
                paid: 'Paid',
                paid_at: 'Paid on',
                parked: 'Parked',
                password: 'Password',
                paypal: 'PayPal',
                pending_info: 'Pending info',
                pending_payment: 'Pending payment',
                per_installment: '/installment',
                per_month: '/month',
                percentage_parked: '%{percentage} parked',
                personal_details: 'Personal details',
                phone: 'Phone',
                phone_number: 'Phone number',
                picture: 'Picture',
                png_only: '(Only PNG file format accepted)',
                portfolio: 'Portfolio',
                postcode: 'Postcode/ZIP code',
                preview: 'Preview',
                price: 'Price',
                price_excl_vat: 'Price excl. VAT',
                price_is_just_an_estimate: 'This amount is an estimate based on the most recent currency conversion rate.',
                price_not_eligible_for_installments: 'Installments are not available for this domain. Make sure the domain has a buy now price which is greater than or equal to %{price}.',
                price_sold: 'Sold for',
                profile_name: 'Nickname',
                published: 'Published',
                quick_reply: 'Quick reply',
                recommended: 'Recommended',
                registration_number: 'Registration number',
                rent_domain: 'Rent domain',
                rent_enabled: 'Rents',
                rent_fee: 'Monthly rent price',
                rent_fee_not_set: '(Not set, click here to set)',
                rent_settings: 'Rent settings',
                rents_disabled_for_this_domain: 'Rent is disabled for this domain',
                rents_enabled_for_this_domain: 'Rent is enabled for this domain',
                result: 'Result',
                revenue: {
                    gross: 'Gross revenue',
                    net: 'Net revenue',
                    received: 'Received',
                    to_receive: 'To receive',
                    total: 'Total revenue'
                },
                search: 'Search',
                seller: 'Seller',
                seller_name: 'Name',
                sent_at: 'Sent on',
                share: 'Share',
                signed_up: 'Signed up',
                sold_by: 'Listed by',
                sold_by_name: 'Listed by %{name}',
                starting_offer: 'Starting offer',
                state: 'State',
                status: 'Status',
                subject: 'Subject',
                submitted: 'Submitted',
                succeeded: 'Succeeded',
                text_email: 'Plain-text',
                this_is_a_lead: 'Lead (negotiating)',
                this_month: 'this month',
                to: 'To',
                total: 'Total',
                total_incl_vat: 'Total incl. VAT',
                total_per_month: 'Total per month',
                transaction_cancelled: 'Transaction canceled',
                type: 'Type',
                unknown: 'Unknown',
                updated: 'Updated',
                updated_at: 'Updated on',
                vat: 'VAT',
                vat_ex: 'excl. VAT',
                vat_inc: 'incl. VAT',
                vat_number: 'VAT number',
                vat_option_do_not_show: 'Do not show VAT at all',
                vat_option_exclude: 'Price excludes VAT',
                vat_option_include: 'Price includes VAT',
                vat_rate: 'VAT rate',
                views_last_month: '%{views} last month'
            },
            legal: { title: 'Legal' },
            locale: {
                'de-de': 'German',
                'en-us': 'English',
                'es-419': 'Spanish',
                'es-es': 'Spanish',
                'fr-fr': 'French',
                'hi-in': 'Hindi (India)',
                'nl-nl': 'Dutch',
                'pt-br': 'Portuguese',
                'zh-cn': 'Chinese'
            },
            mailer: { sender_name: 'Simon' },
            mailers: {},
            markup: {
                description: {
                    clients: {
                        show: {
                            facebook: 'I found a great domain name shop on %{brand}. Check it out!',
                            twitter: 'I found a great domain name shop on @%{username}. Check it out!'
                        }
                    },
                    curated_lists: {
                        show: {
                            facebook: 'I found a great curated list on %{brand}. Check it out!',
                            twitter: 'I found a great curated list on @%{username}. Check it out!'
                        }
                    },
                    parking: {
                        show: {
                            facebook: 'I found a great domain name for sale. Check it out!',
                            twitter: 'I found a great domain name for sale. Check it out!'
                        }
                    },
                    products: {
                        show: {
                            facebook: 'I found a great domain name for sale on %{brand}. Check it out!',
                            twitter: 'I found a great domain name for sale on @%{username}. Check it out!'
                        }
                    }
                },
                title: {
                    clients: {
                        show: {
                            facebook: '%{name} - Domain Name Shop',
                            twitter: '%{name} - Domain Name Shop'
                        }
                    },
                    curated_lists: {
                        show: {
                            facebook: '%{name} - Curated Domain Names',
                            twitter: '%{name} - Curated Domain Names'
                        }
                    },
                    parking: {
                        show: {
                            facebook: '%{name} - Domain Name For Sale',
                            twitter: '%{name} - Domain Name For Sale'
                        }
                    },
                    products: {
                        show: {
                            facebook: '%{name} - Domain Name For Sale',
                            twitter: '%{name} - Domain Name For Sale'
                        }
                    }
                }
            },
            meta: {
                description: {
                    clients: {
                        show: "Discover %{client_name}'s Profile on %{brand}. Buy domain names from this seller. %{brand} keeps you safe."
                    },
                    contacts: {
                        show: 'Do you need help with buying and selling domain names? Contact us with any questions you may have.'
                    },
                    curated_lists: {
                        show: "Shop %{domain_count} '%{curated_list_name}' related domain names curated by %{curator_name}. %{brand} keeps you safe."
                    },
                    default: 'Buy and Sell Domains with %{brand}. Discover millions of domain names available for sale. %{brand} keeps you safe.',
                    help_center: {
                        buyer_guide: 'Buy Domain Names with %{brand}. Follow our best practices and start shopping!',
                        dictionary: "Become a Domain Expert with %{brand}'s dictionary. Learn everything there is to know about the domain name industry. ",
                        seller_guide: 'Sell Domain Names with %{brand}. Follow our best practices and start selling!',
                        trust_and_safety: 'Shop Domain Names with %{brand}. Learn how we protect and guarantee all your transactions.'
                    },
                    legal: {
                        disclaimer: 'By accessing or using %{brand}, you agree to be bound by the following disclaimer.',
                        privacy: 'By accessing or using %{brand}, you agree to be bound by the following privacy policy.',
                        terms: 'By accessing or using %{brand}, you agree to be bound by the following terms of use.'
                    },
                    parking: {
                        auctioned: 'The domain name %{domain} is being auctioned. Create an account and start bidding! %{brand} keeps you safe.',
                        deleted: 'The domain name %{domain} has been deleted. Discover millions of domains available for sale. %{brand} keeps you safe.',
                        not_found: 'The domain name %{domain} is misconfigured. Discover millions of domains available for sale. %{brand} keeps you safe.',
                        rent: 'The domain name %{domain} is available for rent. %{brand} keeps you safe.',
                        show: 'The domain name %{domain} is for sale. Make an offer or buy it now at a set price. %{brand} keeps you safe.',
                        sold: 'The domain name %{domain} has already been sold. Discover millions of domains available for sale. %{brand} keeps you safe.'
                    },
                    passwords: {
                        create: 'Lost your password? Request a new one here to get back to your account.',
                        new: 'Lost your password? Request a new one here to get back to your account.'
                    },
                    products: {
                        auctioned: 'The domain name %{domain} is being auctioned. Create an account and start bidding! %{brand} keeps you safe.',
                        deleted: 'The domain name %{domain} has been deleted. Discover millions of domains available for sale. %{brand} keeps you safe.',
                        not_found: 'The domain name %{domain} is misconfigured. Discover millions of domains available for sale. %{brand} keeps you safe.',
                        show: 'The domain name %{domain} is for sale. Make an offer or buy it now at a set price. %{brand} keeps you safe.',
                        sold: 'The domain name %{domain} has already been sold. Discover millions of domains available for sale. %{brand} keeps you safe.'
                    },
                    registrations: {
                        new: 'Sell Domain Names with %{brand}. Create an account and get started! %{brand} keeps you safe.'
                    },
                    searches: {
                        index: 'Search Domain Names with %{brand} and discover millions of domain names available for sale. %{brand} keeps you safe.'
                    },
                    sessions: {
                        new: 'Sell Domain Names with %{brand}. Log in to your account and get started! %{brand} keeps you safe.'
                    },
                    welcome: {
                        about: "Bringing Domains to Life. {brand}'s mission is to help domain buyers and sellers trade in the easiest and safest way possible.",
                        home: 'Buy and Sell Domains with %{brand}. Discover millions of domain names available for sale. %{brand} keeps you safe.'
                    }
                },
                title: {
                    bulks: { index: 'Bulk imports', show: 'Bulk #%{token}' },
                    clients: {
                        index: 'Clients',
                        show: "%{client_name}'s Domain Shop"
                    },
                    confirmations: { show: 'Offer sent' },
                    contacts: { contact: 'Contact Us', show: 'Contact Us' },
                    conversations: { index: 'Sales Activity' },
                    curated_lists: {
                        index: 'Curated Lists',
                        show: '%{curated_list_name} Domain Names'
                    },
                    dashboards: { show: 'Dashboard' },
                    default: 'Buy and Sell Domain Names',
                    delivered_emails: { index: 'Emails' },
                    domains: {
                        create: 'List Your Domains',
                        index: 'Portfolio',
                        new: 'List Your Domains'
                    },
                    help_center: {
                        buyer_guide: 'Domain Buyer Guide',
                        dictionary: 'Domain Name Dictionary',
                        seller_guide: 'Domain Seller Guide',
                        trust_and_safety: 'Trust and Safety'
                    },
                    legal: {
                        disclaimer: 'Disclaimer',
                        privacy: 'Privacy Policy',
                        terms: 'General Terms of Use'
                    },
                    offers: { show: 'Check your inbox' },
                    onboardings: {
                        create_domains: 'List Your Domains',
                        nameservers: 'Start Selling',
                        new_domains: 'List Your Domains'
                    },
                    orders: {
                        edit: 'Billing Information',
                        index: 'Installments',
                        invoice: 'Invoice %{number}',
                        result: 'Payment',
                        show: 'Order Confirmation'
                    },
                    parking: {
                        auctioned: '%{domain} - Auctioned',
                        deleted: '%{domain} - Deleted',
                        not_found: '%{domain} - Misconfigured',
                        rent: 'The domain name %{domain} is available for rent',
                        rented: '%{domain} - Rented',
                        show: 'The domain name %{domain} is for sale',
                        sold: '%{domain} - Sold'
                    },
                    passwords: {
                        create: 'Password Reset',
                        edit: 'New Password',
                        new: 'Password Reset',
                        update: 'New Password'
                    },
                    products: {
                        auctioned: '%{domain} - Auctioned',
                        deleted: '%{domain} - Deleted',
                        not_found: '%{domain} - Misconfigured',
                        show: 'The domain name %{domain} is for sale',
                        sold: '%{domain} - Sold'
                    },
                    registrations: { edit: 'Settings', new: 'Sell Domains' },
                    rents: { show: 'Request sent' },
                    requests: { show: 'Request sent' },
                    revenues: {
                        index: 'Revenue - Overview',
                        show: 'Revenue - %{period}'
                    },
                    searches: { index: 'Search and Buy Domain Names' },
                    sessions: { new: 'Log in' },
                    welcome: {
                        about: 'About Us',
                        home: 'Domain Marketplace | Buy & Sell Domain Names'
                    }
                }
            },
            number: {
                currency: {
                    format: {
                        delimiter: ',',
                        format: '%u%n',
                        precision: 0,
                        separator: '.',
                        significant: !1,
                        strip_insignificant_zeros: !1,
                        unit: '\u20ac'
                    }
                },
                format: {
                    delimiter: ',',
                    precision: 0,
                    separator: '.',
                    significant: !1,
                    strip_insignificant_zeros: !1
                },
                human: {
                    decimal_units: {
                        format: '%n %u',
                        shorthand: {
                            billion: 'B',
                            format: '%n%u',
                            million: 'M',
                            thousand: 'K',
                            trillion: 'T'
                        },
                        units: {
                            billion: 'Billion',
                            million: 'Million',
                            quadrillion: 'Quadrillion',
                            thousand: 'Thousand',
                            trillion: 'Trillion',
                            unit: ''
                        }
                    },
                    format: {
                        delimiter: '',
                        precision: 3,
                        significant: !0,
                        strip_insignificant_zeros: !0
                    },
                    storage_units: {
                        format: '%n %u',
                        units: {
                            byte: { one: 'Byte', other: 'Bytes' },
                            gb: 'GB',
                            kb: 'KB',
                            mb: 'MB',
                            tb: 'TB'
                        }
                    }
                },
                percentage: { format: { delimiter: '', format: '%n%' } },
                precision: { format: { delimiter: '' } }
            },
            offer: {
                email: {
                    subtitle: 'Follow the link in the email we just sent you to confirm your email address.',
                    title: 'Almost done, check your inbox.'
                },
                sent: {
                    subtitle: 'We\u2019ve forwarded your offer to the seller. The seller will either accept, decline or counter your offer. We will notify you per email once the seller has responded.',
                    title: 'Your offer on the domain %{domain} was sent!'
                }
            },
            onboarding: {
                nameservers: {
                    button: 'Show me how to',
                    how_to: {
                        subtitle: 'Follow this video if you used GoDaddy to register your domain names.\nIf you used another registrar, scroll down and select it.\n',
                        title: 'How do I change my nameservers?'
                    },
                    registrar: {
                        instructions: 'Click the link below and follow the instructions to change your nameservers to:',
                        subtitle: 'Select another one here',
                        title: 'Not your registrar?'
                    },
                    skip_link: 'Skip step for now',
                    subtitle: 'Use the following nameservers',
                    title: 'Get your For Sale pages up and running',
                    your_page: 'This is what your domains will look like'
                },
                new_domains: {
                    button: 'List your domains',
                    manual: {
                        placeholder: 'example.com, example.org, example.net',
                        title: 'Paste your domains names'
                    },
                    upload: {
                        button_title: 'Upload your file',
                        example: {
                            link: 'Download a template:',
                            list: { csv: '.csv', txt: '.txt' }
                        },
                        format_list: '.CSV or .TXT file\n1 domain per row\nNo prices <span class="i-tooltip" data-toggle="tooltip" data-placement="right" data-container="body" title="" data-original-title="This form does not support importing domains with prices. We can however help you personally. Just contact us!"></span>\n',
                        title: 'Import from a file'
                    }
                },
                step_1: {
                    benefits: {
                        customization: {
                            body: 'Set your prices, choose what buying options to offer, and personalize your pages to the colors of your brand.',
                            title: 'Decide how to sell'
                        },
                        escrow: {
                            body: 'Fast & easy domain escrow, daily payouts, fully automated invoicing and more! You can sit back and relax!',
                            title: 'Get paid'
                        },
                        title: 'Why choose DAN.COM?',
                        visibility: {
                            body: 'Welcome buyers on optimized For Sale pages that convert better than any other. Rank on Google in no time!',
                            title: 'Become visible online'
                        }
                    },
                    faq: {
                        button: 'Read more answers',
                        installments_process: {
                            body: 'You can enable offering installments to your buyers directly from your account settings or portfolio.\n\nOnce the buyer has initiated the transaction by paying the first installed payment we proceed and take your domain in escrow until the total purchase price is paid.\n\nWhen the buyer is in default, you get to keep the received installed payments and the domain will be returned to you.',
                            title: 'How does selling a domain in installments work?'
                        },
                        payout_delay: {
                            body: 'The process normally takes less than 24 hours. It can, however,\u200b vary slightly depending on the buyer. We indeed have to wait for their payment before we can forward you the funds.',
                            title: 'I sold a domain, when can I expect my payment?'
                        },
                        sales_increase: {
                            body: 'DAN.COM helps you optimize your online channels to get more sales. For Sale pages and seller profiles are for example frequently updated to improve conversion rates. We also invest heavily in SEO so you rank in Google. Finally, we include Facebook and Twitter markup so your domains and portfolio look great when you share them on social media.',
                            title: 'How do you increase my domain sales?'
                        },
                        title: 'Frequently asked questions'
                    },
                    features: {
                        backoffice: {
                            body: 'Your account holds great tools to manage your domain business. The interface is extremely simple and straightforward. It focuses on making your workflow fast and efficient.\nEach new buyer interested in your domains pops-up in a new chat window. You can simply jump in and discuss openly!\n',
                            title: 'Manage & chat'
                        },
                        for_sale: {
                            body: 'For Sale pages made by DAN.COM are clear and ad-free, they leave no room for confusion. The availability of the domain, price and ownership information are obvious. And, gorgeous traffic stats give it even more value.\nThis transparency & depth combine for industry leading conversion rates!\n',
                            title: 'Clearly for sale'
                        },
                        profile: {
                            body: 'Promoting your domains goes a long way towards increasing sales. This is why DAN.COM helps you create a beautiful profile that buyers can easily browse and search through.\nWrite something about yourself, add a picture & background, and get your business viral on social media!\n',
                            title: 'A neat shop window'
                        },
                        title: 'Best-in-Class domaining tools'
                    },
                    final_form: { title: 'Ready, set, go!' },
                    form: {
                        button: 'Create your account',
                        client_type: {
                            business: 'Yes',
                            individual: 'No',
                            question: 'Do you represent a company?'
                        },
                        terms: {
                            link: 'terms of use',
                            text_html: 'I accept the %{link} of %{brand}.'
                        }
                    },
                    hero: {
                        subtitle: 'Do you own quality domain names best suited for selling?\nStart using the right tools to appeal to end-users, and sell at prices worthy of your domains!\n',
                        title: 'Build & grow your domain business'
                    },
                    pricing: {
                        body: 'Join today and use all tools for free!\nOnly once you successfully conclude a sale with a buyer will you pay a commission of 9% (excluding VAT, if applicable).\n',
                        button: 'Create account',
                        commission: { label: 'commission', rate: '9%' },
                        title: 'No sale, no cost to you'
                    },
                    trust_and_safety: {
                        customer_support: {
                            body: 'Sellers love our support team! We are always available for you and respond to your chat or email within 51 minutes.',
                            title: 'Best Customer support'
                        },
                        safe_payment: {
                            body: 'Our partner Adyen processes all payments with professional-grade security so you never have to worry!',
                            title: 'Safe payments by Adyen'
                        },
                        seller_protection: {
                            body: 'We protect every transaction through a careful escrow process, leading to 100% successful acquisitions since 2014.',
                            title: 'Seller protection program'
                        },
                        title: 'We keep you safe'
                    }
                },
                steps: {
                    account: { done: 'Account created' },
                    nameservers: {
                        active: 'Start selling!',
                        disabled: 'Start selling!'
                    },
                    new_domains: {
                        active: 'List your domains',
                        done: 'Domains listed'
                    }
                }
            },
            orders: {
                button: { payment: 'Secure payment' },
                edit: {
                    buyer_type: {
                        business: 'Yes',
                        individual: 'No',
                        question: 'Do you represent a company?'
                    },
                    info: { order: { title: 'Order summary' } },
                    next: {
                        checkout_html: 'Your payment gets processed securely by our partner %{link}.',
                        escrow: 'The domain is placed in our escrow account to keep it safe.',
                        setup_domain: 'We help you set up your domain so you can start using it right away.',
                        title: 'What happens next',
                        transfer_code: 'We give you the instructions to transfer your domain name.'
                    },
                    popovers: {
                        address: {
                            content: '<p>Please enter your street address, apartment building, floor, number, etc.</p>\n<p><u>Example:</u> 7261 Princeton Ave</p>\n',
                            title: 'Which address should be on the invoice?'
                        },
                        email: {
                            content: '<p>Once your payment is processed, we will need your email address to send you the details to start using your new domain.</p>\n<p><u>Example:</u> a.einstein@example.com</p>\n',
                            title: 'What is your primary email address?'
                        },
                        name: {
                            content: '<p>Please enter your full name, starting with first name followed by last name.</p>\n<p>First name is also referred to as given name. Last name is also often called family name or surname.</p>\n<p><u>Example:</u> if your first name is Albert and your last name is Einstein, then your full name is Albert Einstein.</p>\n',
                            title: 'To whom should we send the invoice?'
                        },
                        phone: {
                            content: '<p>We will only use your phone number in case there is a significant problem with your purchase.</p>\n<p>Please select your country and enter your phone number.</p>\n<p><u>Example:</u> 172 542 5968</p>\n',
                            title: 'At which number can we reach you?'
                        },
                        vat_number: {
                            content: '<p>If your company is European (EU) and is VAT-registered, you can reclaim the VAT you pay when you buy goods and services.</p>\n<p>A valid VAT number is then required in order for your invoice to be correct.</p>\n<p><u>Example:</u> DE123456789</p>\nYou can ignore this if your company is not based in the European Union or is not VAT-registered.\n',
                            title: 'Why do you need my VAT number?'
                        }
                    },
                    subtitle: 'You will receive an invoice once your payment is processed',
                    supported_payment: {
                        title: 'Some of the accepted payment options'
                    },
                    title: 'Please fill-in your billing information'
                },
                result: {
                    authorised: {
                        subtitle_html: 'You will soon receive an invoice and the authorization code',
                        subtitle_installments_html: 'You will soon receive an invoice in your inbox',
                        subtitle_rent_html: 'You will soon receive an invoice in your inbox',
                        title: 'Your payment was processed successfully'
                    },
                    cancelled: {
                        subtitle_html: 'Please try again or %{link}',
                        title: 'Your payment could not be processed'
                    },
                    error: {
                        subtitle_html: 'Please try again or %{link}',
                        title: 'Your payment could not be processed'
                    },
                    faq: {
                        installments_transfer: {
                            text: 'Not yet. We will help you with the transfer once all installments will be paid.',
                            title: 'Can I transfer the domain to my account?'
                        },
                        invoice: {
                            installments_text: 'Yes! You receive it a few minutes after paying the 1st installment.',
                            text: 'Yes! You receive it a few minutes after paying for your order.',
                            title: 'Can I have a business invoice with VAT?'
                        },
                        payment: {
                            text: 'No. We only support Bank wire, Visa, MasterCard, iDeal, MisterCash and Sofort.',
                            title: 'Do you accept other payment methods?'
                        },
                        support: {
                            link: 'contact us',
                            text_html: 'Sure! You can %{link} at any time and we will guide you through it.',
                            title: 'Can you help me with the transfer?'
                        },
                        title: 'Frequently asked questions',
                        transfer: {
                            text: 'You get the authorization code within 24 hours after your payment.',
                            title: 'When will I get my domain name?'
                        },
                        use_domain: {
                            text: 'We help you setup the domain once the 1st installment is paid.',
                            title: 'When can I start using the domain name?'
                        }
                    },
                    pending: {
                        subtitle_html: 'You will receive an invoice once your payment is processed',
                        title: 'Your payment is pending'
                    },
                    refused: {
                        subtitle_html: 'Please try again or %{link}',
                        title: 'Your payment was refused'
                    },
                    subtitle_link: 'Contact us',
                    summary: { title: 'Summary of your order' }
                },
                show: {
                    amex_unsupported: 'Reminder: we do not accept American Express. Please contact our support team or use VISA, Maestro or Mastercard instead.',
                    billing: 'Your billing information',
                    blank_vat_tooltip: 'Please provide the VAT number of your company if you think this VAT rate is incorrect',
                    pay_installment: 'To pay now',
                    subtitle: 'You will then be redirected to a secure payment page by Adyen',
                    title: 'Please check the details below',
                    vat_option_include_tooltip: 'Price includes VAT'
                },
                steps: 'Billing information\nOrder confirmation\nPayment\n'
            },
            pagination: {
                next: 'Next',
                next_step: 'Next step',
                previous: 'Previous',
                previous_step: 'Previous step'
            },
            parking: {
                active: {
                    alternate_option: {
                        buy_now: {
                            link: 'buy this domain',
                            text_html: 'Or %{link} now for %{price}'
                        },
                        offer: {
                            link: 'make an offer',
                            text_html: 'Or %{link} on this domain'
                        },
                        price_request: {
                            link: 'request price',
                            text_html: 'Or %{link} from the seller'
                        }
                    },
                    benefits: {
                        buyer_protection: 'Covered by our Buyer Protection Program',
                        installments: 'Pay in installments without extra charge',
                        safe_payment: 'Safe payments by our payment processor Adyen',
                        transfer_time: 'Get this domain\nin less than 24 hours\n'
                    },
                    buying_form: {
                        buy_now: { button: 'Buy now' },
                        installments: {
                            button: {
                                one: 'Buy in %{count} installment',
                                other: 'Buy in %{count} installments'
                            },
                            buy_in_installments: 'Buy in installments',
                            duration: {
                                one: '%{count} month',
                                other: '%{count} months'
                            },
                            number_of_installments: 'Number of installments',
                            per_time_period: '/month',
                            title: 'Prefer monthly payments?'
                        },
                        offer: {
                            button: 'Send your offer',
                            header: 'Make an offer',
                            minimum_offer: 'Your offer must be higher than %{price}',
                            title: 'My offer for this domain is:'
                        },
                        price_request: { button: 'Request price' }
                    },
                    installment: {
                        contract: {
                            title: 'Additional installment agreement DAN.COM'
                        },
                        i_accept: 'I accept the',
                        installment_contract: 'Installment Contract'
                    },
                    mobile_banner: {
                        buy_now: 'Buy now for %{price}',
                        offer: 'Make an offer',
                        or_buy_now: 'or buy it now for %{price}',
                        or_offer: 'or make an offer',
                        rent: 'Rent now for %{price}'
                    },
                    modal: {
                        buyer_protection: {
                            body: {
                                documentation: 'You receive all the documentation necessary to acquire the domain from the seller.',
                                escrow_html: 'First, we secure the domain from its current owner. Then, we help you become the new owner. Finally, we only proceed with paying the seller out <strong>after</strong> you confirm the reception of the domain.',
                                intro: 'DAN.COM is a third party domain escrow & transfer provider. We safeguard all domain purchases conducted on our marketplace. All transactions are protected by our careful escrow process & team. DAN.COM also offers post transaction support to our buyers at no additional cost. Here is how our escrow process works:',
                                monitoring: "DAN.COM's escrow agents monitor every transaction and swiftly intervene in case of a \u200bproblem.",
                                refund: "If the seller doesn't deliver on their part of the deal, we refund you within 24 hours.",
                                verification: 'Sellers go through a careful verification process before they can join our marketplace.'
                            },
                            title: 'Buyer Protection Program'
                        },
                        contact_form: {
                            button: 'Send your offer',
                            subtitle: "Please fill in the form below, and we'll send you an email with a link to confirm your email address.",
                            terms: {
                                body_html: 'My offer is legally binding, and I accept the %{link}.',
                                link: 'terms of use'
                            },
                            title: 'You are about to make an offer of %{currency}%{offer} for %{domain}'
                        },
                        installments: {
                            body: {
                                cost: 'You can buy this domain in monthly installments without any additional cost.\nTick the Buy in installments checkbox, choose how many installments you wish and proceed to the next step to complete your installed purchase.\n',
                                payment: 'You will then proceed to checkout and pay for the first installment safely.\nThe next installments are due every subsequent month.\n',
                                transfer: 'The domain is held in escrow by DAN.COM until the full amount is paid.\nAt that moment, we transfer the domain to your registrar.\nYou are then the new owner!\n',
                                usage: 'You can start using your new domain right away!\nLet us know what configuration to use, and we will make it happen within 24 hours.\n'
                            },
                            title: 'Monthly installment plan'
                        },
                        safe_payment: {
                            body: {
                                customers: {
                                    body: "Adyen helps some of the world's leading brands accelerate their growth in specific industries.",
                                    title: 'Powering growth for leading industries'
                                },
                                intro: 'Adyen is a global payment company offering businesses an end-to-end infrastructure delivering frictionless payments anywhere in the world.',
                                methods: {
                                    body: 'With Adyen and DAN.COM, you can purchase domain names with the payment options you know and trust.',
                                    title: 'Popular payment methods'
                                },
                                safety: {
                                    body: 'RevenueProtect is an integrated risk management system designed to maintain the perfect balance between your safety and that of the seller.',
                                    title: 'Comprehensive risk management'
                                }
                            },
                            title: 'Safe payments by Adyen'
                        },
                        transfer_time: {
                            body_html: 'Transferring a domain tends to take a long time, a very long time actually. But who says it has to be like this?\n98% of the transactions conducted on DAN.COM are completed within <strong>24 hours</strong> after payment!\nWe secure the domain from its current owner and send you the transfer instructions right after you pay.\nGetting a new domain no longer needs to take a lot of time!\n',
                            title: 'Fast domain transfers'
                        },
                        vat: {
                            body: {
                                exception: {
                                    item_1: 'You will not be charged VAT if the seller is a consumer.',
                                    item_2: 'You will not be charged VAT if the seller is a business outside of the European Union.',
                                    title: 'Are there exceptions?'
                                },
                                what: {
                                    body: 'The Value Added Tax (VAT) is a consumption tax applied in the European Union (EU) to all goods and services.',
                                    title: 'What is VAT?'
                                },
                                who: {
                                    item_1: 'All consumers in the EU are charged VAT on the purchase of goods and services.',
                                    item_2: 'Businesses in the EU buying from a business in the same country are also charged VAT.',
                                    item_3: 'Businesses in the EU buying from a business in a different EU country are not charged VAT.',
                                    item_4: 'Consumers and businesses outside of the European Union are not charged VAT.',
                                    title: 'Who has to pay VAT?'
                                },
                                wrong: {
                                    body: 'The VAT rate provided on this page is only an estimation. It will be corrected during the checkout process after entering your billing details.',
                                    title: 'Is your VAT calculation wrong?'
                                }
                            },
                            title: 'Value Added Tax'
                        }
                    },
                    rent: {
                        contract: { title: 'Rental Agreement DAN.COM' },
                        i_accept: 'I accept',
                        rent_contract: 'Rent Contract',
                        the_tos: 'the TOS'
                    },
                    seller: {
                        button: {
                            bio: 'See seller profile',
                            domains: 'See more domains'
                        },
                        notes: "Seller's notes about this domain",
                        title: {
                            bio: 'Learn more about this seller',
                            domains: 'Popular domains from this seller'
                        }
                    },
                    title: 'The domain name %{domain_name} is for sale!',
                    traffic: {
                        placeholder: {
                            first: {
                                body: 'Come back in a few days to see if more people have discovered this domain.',
                                subtitle: 'Visits per day',
                                title: 'You are the first visitor today!'
                            }
                        },
                        subtitle: {
                            day: 'Visits per day',
                            month: 'Visits per month',
                            quarter: 'Visits per quarter',
                            week: 'Visits per week'
                        },
                        title: 'Traffic stats',
                        why: {
                            body: "People are typing this domain directly in their browser bar. These are potential customers for your business! You can capture them instantly the moment you start using the domain. It's as if you would open a shop in a busy shopping street and get customers from day one!",
                            title: 'Why is traffic important for your domain?'
                        }
                    }
                },
                auctioned: {
                    button: 'Visit the auction now!',
                    subtitle: 'There are many more domains available for auction on %{brand}. You can probably find the one that fits you best.',
                    title: 'The domain name %{domain} is being auctioned'
                },
                brand: {
                    offered_items: {
                        domain_name: 'Domain name (%{domain_name})',
                        facebook_handle: 'Facebook account (%{handle})',
                        instagram_handle: 'Instagram account (%{handle})',
                        logo: 'Free Logo (PNG Format)',
                        title: 'Includes:',
                        twitter_handle: 'Twitter account (%{handle})'
                    },
                    title: 'The brand %{domain_name} <span class="highlighted">is for sale!</span>'
                },
                deleted: {
                    subtitle: 'There are millions of other domains available on %{brand}. You can probably find the one that fits you best!',
                    title: 'The domain name %{domain} has been deleted'
                },
                hybrid: {
                    ads: {
                        none_found: 'No ads were found',
                        shop: 'Shop',
                        subtitle: 'Here are some useful links',
                        title: 'Not looking to buy the domain %{domain_name}?'
                    },
                    for_sale: 'The domain <strong>%{domain_name}</strong> is for sale!'
                },
                not_found: {
                    footer: {
                        button: 'Create an account',
                        subtitle: 'List this domain on DAN.COM',
                        title: 'Is this your domain?'
                    },
                    subtitle: 'The owner of this domain is using the nameserver configuration of %{brand} but has not listed this domain yet.',
                    title: 'The domain name %{domain} is misconfigured'
                },
                rent: {
                    benefits: { rent: 'How does renting a domain work?' },
                    button: 'Rent now',
                    modal: {
                        contact_form: {
                            subtitle: "Please fill in the form below and we'll send you an email with more info about renting this domain.",
                            terms: {
                                body_html: 'I accept the %{link} of DAN.COM.'
                            },
                            title: 'You are about to rent the domain %{domain}'
                        },
                        how_it_works: {
                            body_html: 'Renting a domain is simple, safe and affordable. Simply click on the Rent Now button and proceed to checkout. Once you pay for the first month of rent, you can start using & developing your new domain within 24 hours!\n\nDAN.COM holds the domain in escrow under her management for the entire duration of the rental, so you never have to worry. You can also keep renting the domain name for as long as you keep paying the monthly rental price.\n',
                            title: 'Monthly domain rental'
                        }
                    },
                    title: 'The domain name %{domain_name} is available for rent!'
                },
                rented: {
                    subtitle: 'There are millions of other domains available on %{brand}. You can probably find the one that fits you best!',
                    title: 'The domain name %{domain} has already been rented'
                },
                sold: {
                    subtitle: 'There are millions of other domains available on %{brand}. You can probably find the one that fits you best!',
                    title: 'The domain name %{domain} has already been sold',
                    title_with_pending_payment: 'An agreement is reached for %{domain}.\nThe domain is pending sale.\n'
                }
            },
            payment_reminders_mailer: {
                four_weeks: {
                    body: "In spite of previous reminders, the invoice of %{price} for the domain name **%{domain_name}** remains unpaid. We have tried several times to reach you and haven't been able to get a hold of you.\n\n**Please note that when you purchase a domain name on DAN.COM you enter into a legally binding agreement with the seller. Therefore, it is not possible to cancel your purchase. You can review our terms of use to which you agreed [here](%{terms_url}).**\n\nGiven the above terms, we would like to give you a final one (1) extra business day to pay for the domain name before we charge additional costs.\n",
                    call_to_action: '[Proceed to checkout](%{url})',
                    note: "If we don't receive your payment by the next day, this case will be automatically transferred to the bailiff.\n\nNext to that, the seller has the right to start legal proceedings against you, as you are violating a legally binding agreement. All additional costs will be passed on to you.\n\nIf this correspondence and your payment have crossed one another then please regard this final notice as not having been sent.\n",
                    subject: 'Final payment notice - %{domain_name}'
                },
                one_day: {
                    body: "Hope everything is going well.\n\nWe haven't received your payment for the domain name **%{domain_name}** yet, so I wanted to follow up with you.\n\nI am sure you are busy, but would much appreciate if you could take a moment to proceed to checkout. Once we receive your payment the domain transfer will start.\n",
                    call_to_action: '[Proceed to checkout](%{url})',
                    note: 'Please let me know if you have any questions.',
                    subject: 'Your domain - %{domain_name}'
                },
                one_week: {
                    body: 'Your payment of %{price} for the purchase of the domain name **%{domain_name}** is due.\n\nTo make sure both the buyer and seller enjoy a pleasant and swift transaction we maintain an initial payment due date of 7 days. Therefore, we ask you to complete the payment **right away**.\n',
                    call_to_action: '[Proceed to checkout](%{url})',
                    note: 'Once we receive your payment the domain transfer will be initiated.\n\nPlease feel free to contact us if you have any questions.\n',
                    subject: 'Payment reminder - %{domain_name}'
                },
                three_weeks: {
                    body: 'Our administration shows that your invoice of %{price} for the domain name **%{domain_name}** has not yet been paid.\n\n**We expect to receive your payment within 1 business day.**\n',
                    call_to_action: '[Proceed to checkout](%{url})',
                    note: 'If we don\u2019t receive your payment within 1 business day, we shall charge additional costs as stated in our terms of use.\nWe will also be forced to pass on your contact details to the seller. The seller has the right to pursue legal action to make sure the agreement is honored because you entered into a legally binding agreement.\n',
                    subject: 'Last payment reminder - %{domain_name}'
                },
                two_weeks: {
                    body: 'This is a second email to remind you that your payment of %{price} for the domain name **%{domain_name}** is still overdue.\n\nWe realize you must have mistakenly overlooked it but ask that you give it your prompt attention now. We expect the payment to be secured by us within **3 business days**.\n',
                    call_to_action: '[Proceed to checkout](%{url})',
                    note: 'Once we receive your payment the domain transfer will start.\n\nPlease feel free to contact me if you have any questions.\n',
                    subject: 'Second payment reminder - %{domain_name}'
                }
            },
            placeholder: {
                account: {
                    bank_name: 'Bank name',
                    bic_number: 'BIC / SWIFT code',
                    iban_number: 'Account number',
                    name: 'Full name or name of your company',
                    paypal: 'Email address'
                },
                address: 'Address',
                amount: {
                    do_not_show: 'Amount',
                    excl_vat: 'Amount excl. VAT',
                    incl_vat: 'Amount incl. VAT'
                },
                auth_code: 'Paste authorization code here',
                bid: {
                    do_not_show: 'Offer',
                    excl_vat: 'Offer excl. VAT',
                    incl_vat: 'Offer incl. VAT'
                },
                bio: 'Your bio',
                buyers_name: "Buyer's name",
                city: 'City',
                company_name: 'Your company name',
                current_password: 'Your current password',
                description: 'Description',
                domain_name: 'Domain name',
                email_address: 'Your email address',
                first_name: 'Your first name',
                fullname: 'Your full name',
                last_name: 'Your last name',
                message: 'Your message',
                name: 'Name',
                new_password: 'Your new password',
                password: 'Your password',
                phone_number: 'Your phone number',
                postcode: 'Postcode/ZIP code',
                profile_name: 'Nickname',
                registration_number: 'Registration number',
                search: 'Find a domain',
                vat_number: 'VAT number'
            },
            private: { contact: 'Ask for help' },
            prompt: {
                broker: 'Select a broker',
                client: 'Select a client',
                confirm_delete: 'Are you sure you want to delete?',
                confirm_publish: 'Are you sure you want to publish?',
                country: 'Select a country',
                curator: 'Select a curator'
            },
            recaptcha: {
                errors: {
                    blocked_signup: 'Your adblocker is blocking our captcha, please allow it so you can complete the signup',
                    recaptcha_unreachable: 'reCAPTCHA verification server error, please try again.',
                    verification_failed: 'reCAPTCHA verification failed, please try again.'
                }
            },
            rent: {
                email: {
                    subtitle: "We'll soon send you an email with more info about renthing this domain name.",
                    title: 'Your request to rent %{domain} was sent!'
                }
            },
            rent_activation_mailer: {
                finish_rent_now: {
                    body: "I'm contacting you because you started to rent the domain **%{domain}** yesterday but you weren't able to pay.\n\nDid you encounter a problem during checkout?\n\nIf so, please let me know how I can help you.\n",
                    call_to_action: '[Pay securely](%{url})',
                    subject: 'Start renting domain - %{domain}'
                },
                finish_rent_now_follow_up: {
                    body: "I'm contacting you because you started to rent the domain **%{domain}** a couple of days ago but weren't able to pay.\n\nPlease proceed to checkout now to avoid any domain delivery delays. This is the final reminder.\n",
                    call_to_action: '[Pay securely](%{url})',
                    subject: 'Start renting domain - %{domain}'
                }
            },
            rent_contract: {
                body_html: '<p>The Rentor and Rentee will enter into a rental agreement of the domain name <strong style="margin-left: 5px;">%{domain}</strong> through the website <a target="_blank" href="https://dan.com">dan.com</a>, which is operated by the Escrow Third Party, also known as the Contractor as <a href="https://dan.com/legal/terms-of-use" target="_blank">defined in the general terms of use</a> of DAN.COM. This Rental Agreement is an additional agreement that\u2019s only applicable in case of an Rental Agreement where a domain is rented instead of purchased. By clicking on the button \u201cRent Now\u201d you agree to this additional rental agreement.</p>\n\n<p>The Parties agree to deposit the Domain Name with the Escrow Third Party under the conditions specified herein;</p>\n<p><strong>The parties have agreed as follows:</strong></p>\n<p>This agreement is entered into with no hard end date. This means that the domain can be rented as long as the rentee wants to and doesn\u2019t miss any payment deadlines for the Rental Price.</p>\n\n<p>The Rentor and Rentee agreed to a rent of <strong>%{fee}/per month</strong>, to be paid ultimately on the payment deadline. The first rental payment should be credited on the day that this agreement is formalized. The following payment periods constitute deadlines. After 10 consecutive business days of non-payment, the contract is automatically terminated, with no reimbursements.</p>\n\n<p>The Rentee can submit the DNS/Nameserver settings they\u2019d like to set for the domain which will be updated in the records of the domain by the Escrow Third Party, thus allowing the Rentee to effectively control/develop the Domain Name.</p>\n\n<p>Rentee/Rentor safeguards:</p>\n<ol>\n  <li>\n    After the first Rental Price is submitted, the Rentor and Rentee are prohibited to sell or rent the Domain Name to a third party, to pledge the Domain Name as security if such pledge frustrates the (performance of this) agreement, or to act in any other way which is in conflict with this agreement or which may cause damages to the Escrow Third Party and/or the Rentee. If the Rentor/Rentee violates this clause, the Rentor/Rentee shall be liable for all the actual damages caused to the Escrow Third Party and/or the Rentor/Rentee.\n  </li>\n  <li>\n    The Escrow Third Party functions as an intermediary between the Provider/Rentor and is not part of this rental agreement. The Escrow Third Party solely manages the Domain Name in accordance with this agreement and does not in any way grant any credit, nor does it have any legal claims on the Domain Name against the Rentor. The Rentor and the Rentee shall resolve any conflicts which may arise themselves. The Rentor and the Rentee indemnify and hold harmless the Escrow Third Party from any claim made by any (third) party due to or arising out of any breach of contract or any unlawful act.\n  </li>\n  <li>\n    The Rentee is solely entitled to use the Domain Name with due diligence. The Rentee shall not in any way use the Domain Name which in any respect:\n    <ol style="list-style-type: lower-alpha;">\n      <li>is in breach of any law, statute, regulation or by law;</li>\n      <li>is fraudulent, criminal or unlawful;</li>\n      <li>promotes racism, bigotry, hatred or physical harm of any kind against any group or individual;</li>\n      <li>may infringe or breach the copyright or any intellectual property rights (including without limitation copyright, trademark rights and broadcasting rights) or privacy or other rights of the Escrow Third Party or any third party;</li>\n      <li>contains video, audio photographs, or images of another person without his or her permission (or in the case of a minor, the minor\u2019s legal guardian);</li>\n      <li>provides instructional information about illegal activities such as making or buying illegal weapons or drugs, violating someone\u2019s privacy, or providing, disseminating or creating computer viruses;</li>\n      <li>publicizes or promotes commercial activities and/or sales without our prior written consent such as contests, sweepstakes, barter, advertising, and pyramid schemes;</li>\n      <li>involves the use, delivery or transmission of any viruses, unsolicited emails, trojan horses or any other computer programming routines that are intended to damage, detrimentally interfere with, surreptitiously intercept or expropriate any system, data or personal information.</li>\n    </ol>\n    <p>Any (other) illegal activities or any other activities which may cause damages to the Rentor or the Escrow Third Party and/or which may decrease the value of the Domain Name are strictly prohibited. Such activities include, without limitations, the use of aggressive SEO strategies, techniques and tactics that focus only on search engines and not a human audience, and usually does not obey search engines guidelines (black hat SEO), such as keyword stuffing, invisible text, doorway pages, adding unrelated keywords to the page content or page swapping (changing the webpage entirely after it has been ranked by search engines), and the use of the Domain Name for spam activities.</p>\n  </li>\n  <li>\n    In case of violation of clauses 1,2 and/or 3 the Rentee shall forfeit without further notice of default is required a directly and not open to mitigation claimed fine of 80 times the monthly rent per violation to be paid to the Provider, notwithstanding the Rentor\u2019s or the Escrow Third Party\u2019s right to claim the actual damages. The Rentee is furthermore obligated to limit any damages and/or undo the decreasing of the value of the Domain Name.\n  </li>\n  <li>\n    This agreement shall continue from the date hereof and shall be extended automatically with every timely and successful Rental Price Payment. The Rentee can cancel a Rental Agreement by notifying the Third Party Escrow provider or by not paying the Rental Price before the payment deadline.\n  </li>\n  <li>\n    If the Rentee fails and/or neglects to carry out the terms as set out in this agreement, the Rentor may terminate this agreement immediately without prior notice. The Rentee is liable to compensate all damages caused by this breach of contract, if any.\n  </li>\n  <li>\n    This agreement shall terminate immediately without prior notice if the Rentee suffers bankruptcy, applied for suspension of payment, ceases operations or the company of the Rentee is liquidated.\n  </li>\n  <li>\n    After termination of this agreement, the Rentor may rent or sell the Domain Name to any party, including to competitors of the Rentee.\n  </li>\n  <li>\n    Parties herewith expressly relinquish the right to invoke the dissolution of the present agreement, on whatever grounds.\n  </li>\n</ol>\n<p>\n  This agreement shall be governed by the law of the Netherlands. In the event of disputes regarding or related to the agreement concerned, Parties shall exclusively apply to the competent authority in Amsterdam.\n</p>\n<p>\n  Undeveloped BV\n  <br />\n  Nieuwe Herengracht 47\n  <br />\n  1011 RN Amsterdam\n  <br />\n  Netherlands\n</p>\n<p>\n  Phone\n  <br />\n  +1 737 218 6046\n</p>\n<p>\n  Email\n  <br />\n  support@dan.com\n</p>\n<p>\n  Chamber of Commerce Registration:\n  <br />\n  61079049\n</p>\n<p>\n  VAT number:\n  <br />\n  NL854196468B01\n</p>\n'
            },
            rent_invoice: {
                buyer: 'Rentee',
                price: 'Rental price',
                price_excl: 'Rental price excl. VAT',
                price_incl: 'Rental price incl. VAT %{vat}',
                seller: 'Rentor',
                total: 'Total monthly rental price'
            },
            rent_mailer: {
                rent: {
                    body: '**%{sender_name}** just submitted a request to rent the domain name **%{display_name}** for %{price} per month!',
                    call_to_action: '[Reply to %{sender_name}](%{url})',
                    subject: 'New rent request - %{display_name}'
                }
            },
            routes: {
                about: 'about',
                accept: 'accept',
                account: 'account',
                agreement_reached: 'agreement_reached',
                archived: 'archived',
                billing: 'billing-details',
                'buy-domain': 'buy-domain',
                buy_now: 'buy_now',
                buyer_guide: 'buyer-guide',
                checkout: 'checkout',
                clients: 'clients',
                confirm: 'confirm',
                contact: 'contact',
                conversations: 'conversations',
                curated_lists: 'curated-list',
                dashboard: 'dashboard',
                dictionary: 'dictionary',
                disclaimer: 'disclaimer',
                'domain-seller': 'domain-seller',
                domain_transferred: 'domain_transferred',
                edit: 'edit',
                email: 'email',
                for_sale: 'for-sale-page',
                help: 'help',
                invoice: 'invoice',
                invoices: 'invoices',
                leads: 'leads',
                legal: 'legal',
                login: 'login',
                mute: 'mute',
                new: 'new',
                orders: 'orders',
                password: 'password',
                payment_received: 'payment_received',
                portfolio: 'portfolio',
                'privacy-policy': 'privacy-policy',
                profile: 'seller-profile',
                reject: 'reject',
                removed: 'deleted',
                restorations: 'restorations',
                restore: 'restore',
                sales_activity: 'sales_activity',
                search: 'search',
                seller_guide: 'seller-guide',
                settings: 'settings',
                signup: 'signup',
                'terms-of-use': 'terms-of-use',
                transaction_cancelled: 'transaction_cancelled',
                transaction_closed: 'transaction_closed',
                trust_and_safety: 'trust-and-safety',
                unconfirmed: 'unconfirmed',
                unsubscribe: 'unsubscribe',
                users: 'users'
            },
            sales_activity: {
                bank_account_payout_info: 'We will send the payout to your Bank account: (%{billing_name}, %{iban}, %{bank_code}, %{address})',
                conversations: {
                    action: {
                        acceptance: 'Accept this offer',
                        account_change_initiated: 'Account change initiated',
                        counter_offer: 'Send a counter offer',
                        counter_offer_revoked: 'Revoke last offer',
                        domain_transferred: 'Domain name transferred',
                        instruct_buyer_domain_transfer: 'Instruct buyer Domain transfer',
                        message: 'Send your message',
                        payment_received: 'Payment received',
                        payout_seller: 'Payout seller',
                        price_response: 'Send your price',
                        rejection: 'Decline this offer',
                        special: 'Automated messages',
                        transaction_cancelled: 'Transaction canceled',
                        transaction_closed: 'Transaction closed'
                    },
                    brokered: 'Brokered lead',
                    escrow: {
                        seller_auth_code_received: 'We have received the authorization code'
                    }
                },
                cryptocurrency_payout_info: 'Your payout will be sent to this %{currency} wallet address: %{cryptocurrency_wallet}',
                incomplete_billing_info: 'Can you please submit your billing info and address details in your settings so we can pay you out for this transaction?',
                menu: {
                    agreement_reached: 'Agreement reached',
                    all: 'All',
                    archived: 'Archived',
                    domain_transferred: 'Domain transferred',
                    invoices: {
                        buyer: 'Buyer invoice',
                        overview: 'Transaction overview',
                        regenerate: 'Regenerate',
                        seller: 'Seller invoice'
                    },
                    leads: 'Leads',
                    mobile: {
                        agreement_reached: 'Agreed on',
                        domain_transferred: 'Transferred',
                        payment_received: 'Paid',
                        payout_requested: 'Payouts',
                        transaction_cancelled: 'Canceled',
                        transaction_closed: 'Closed'
                    },
                    new_lead: 'Add new lead',
                    new_lead_tooltip: 'Import leads collected from other platforms or email here. The standard commission for imported leads is 5%.',
                    payment_received: 'Payment received',
                    payout_requested: 'Payout requested',
                    pdfs: { installment_contract: 'Installment contract' },
                    removed: 'Deleted',
                    renting: 'Renting',
                    transaction_cancelled: 'Transaction canceled',
                    transaction_closed: 'Transaction closed',
                    transactions: 'Transactions',
                    unconfirmed: 'Unconfirmed'
                },
                messages: {
                    actions: {
                        push_internally: 'Push internally',
                        push_internally_at_registrar: 'Push at %{registrar}',
                        transfer_via_auth_code: 'Transfer via auth code'
                    },
                    amount_form: { button: 'Send counter offer' },
                    description: {
                        account_change_initiated: 'We have initiated the domain transfer to the buyers account.',
                        agreement_reached: "Congratulations, you and %{buyer} reached an agreement! From this point on all communication in this window will be between you and DAN.COM. The buyer will now proceed to our secure payment page. We'll notify you about the next step once we've secured the payment. ",
                        ask_auth_code: 'What is the Authorization/EPP code for this domain?',
                        ask_auth_code_button: 'Submit',
                        ask_push_domain: 'Push domain at the current registrar',
                        ask_push_domain_dynadot_com: 'Please push the domain name to our escrow Dynadot account: **dan**\n',
                        ask_push_domain_godaddy_com: 'Can you please push the domain to our escrow account at Godaddy?\n\nYou can use the following account to push the domain to:\n\nEmail: **escrow@undeveloped.com**\n\nCustomer account number: **115847677**\n\n**Important:** Please select (Yes) while pushing the domain to copy the current domain information to the new account. We\u2019ll edit the contact details of importance ourselves when accepting the domain in our account at Godaddy.\n',
                        ask_push_domain_lcn_com: 'Please push the domain name to our LCN.com escrow account: **escrow@undeveloped.com**\n',
                        ask_push_domain_name_com: "Can you please push the domain to our escrow account at name.com?\n\nPlease use the following account code: **1331458-472f720**\n\n**Important:** don't change the domain ownership details while pushing the domain. This activates a 60-day lock which will prevent the buyer from being able to transfer the domain!\n",
                        ask_push_domain_namebright_com: "Can you please push the domain to our escrow account at namebright.com?\n\nYou can use the following account to push the domain to:\n\nEmail: **escrow@undeveloped.com**\n\nUsername: **UndevelopedEscrow**\n\n**Important:** don't change the domain ownership details while pushing the domain. This activates a 60-day lock which will prevent the buyer from being able to transfer the domain!\n",
                        ask_push_domain_namecheap_com: "Can you please push the domain to our escrow account at namecheap.com?\n\nYou can use the following account to push the domain to:\n\nEmail: **escrow@undeveloped.com**\n\nUsername: **UndevelopedEscrow**\n\n**Important:** Don't change the domain ownership details while pushing the domain. This activates a 60-day lock which will prevent the buyer from being able to transfer the domain to another registrar.\n",
                        ask_push_domain_namesilo_com: 'Please push the domain name to Namesilo account: **UndevelopedEscrow**\n',
                        ask_push_domain_park_io: 'Can you please push the domain to our escrow account at park.io?\n\nYou can use the following account to push the domain to:\n\nemail: **escrow@undeveloped.com**\n\nusername: **UndevelopedEscrow**\n',
                        ask_push_domain_porkbun_com: 'Please push the domain name to our Porkbun escrow account: **UndevelopedEscrow**\n',
                        ask_push_domain_uniregistry_com: 'Please push the domain to our escrow Uniregistry account: **escrow@undeveloped.com**\n',
                        ask_push_or_transfer: 'How would you like to transfer the domain?',
                        ask_unlock_domain: 'It seems the domain has a transferlock. Please unlock the domain at your registrar and inform us once you\u2019ve done so.',
                        auth_code_given: 'The Authorization code of the domain is: %{auth_code}',
                        auth_code_incorrect: 'I wasn\u2019t able to transfer the domain with the previously provided authorization code. Please submit the correct authorization code and try again.',
                        auth_code_sent: 'The buyer has received the Authorization code and transfer instructions from us. Please be on the lookout for an email confirmation to release the domain to the new owner & managing registrar.',
                        brokered: {
                            new: {
                                domainer: {
                                    acceptance: 'Please accept this %{bid} offer from %{buyer}.',
                                    counter_offer: 'Please send a %{bid} counter offer to %{buyer}.',
                                    rejection: 'Please decline this %{bid} offer from %{buyer}.'
                                },
                                staff: {
                                    acceptance: '%{buyer} accepted your %{bid} counter offer.',
                                    counter_offer: 'I received a %{bid} counter offer from %{buyer}.',
                                    offer: 'I received a %{bid} offer from %{buyer}.',
                                    rejection: '%{buyer} declined your %{bid} counter offer.'
                                }
                            },
                            old: {
                                domainer: {
                                    acceptance: 'Please accept this %{bid} offer from %{buyer}.',
                                    counter_offer: 'Please send a %{bid} counter offer to %{buyer}.',
                                    rejection: 'Please decline this %{bid} offer from %{buyer}.'
                                },
                                staff: {
                                    acceptance: 'I accepted the %{bid} offer from %{buyer}.',
                                    counter_offer: 'I sent a %{bid} counter offer to %{buyer}.',
                                    offer: 'I received a %{bid} offer from %{buyer}.',
                                    rejection: 'I declined the %{bid} offer from %{buyer}.'
                                }
                            }
                        },
                        buy_in_installments: '%{number_of_installments} x %{price}',
                        buyer_offer_expired: 'The offer you received from the buyer has expired and can no longer be accepted.',
                        domain_transferred: 'The transfer of the domain is completed. %{billing_info_message}',
                        init_escrow: "Hi, I'm Dan! Your automated domain transfer agent. I will be asking you questions and performing tasks based on your answers. 99% of the time this will be a smooth experience for both of us. If however you have some questions or want to talk to a real human, then please mention @simon in your message and my colleague Simon will be glad to assist you.",
                        installment_paid: "We've just secured installment (%{installment_number}/%{installment_total_number}) and will pay you out shortly.",
                        installment_payout_sent: 'Payout sent for installment (%{installment_number}/%{installment_total_number})',
                        instruct_buyer_domain_transfer: "We've sent the buyer additional transfer instructions.",
                        instruct_installment_dns_settings: 'DNS instructions have been sent to buyer',
                        instruct_rental_dns_settings: 'DNS instructions have been sent to buyer',
                        payment_received: "We have received %{buyer}'s payment. Can you please inform us where the domain is currently registered and if you prefer a domain push or transfer?",
                        payment_reminder: 'We have sent %{buyer} a payment reminder.',
                        price_request: '%{buyer} requested the price for %{domain}, please provide it by clicking the button below.',
                        rents: {
                            first_rent_received: 'We have secured the rent fee for the period <strong>%{human_readable_period}</strong>. The next step for you is to transfer the domain to us. Do you wish to deliver the domain at your current registrar or shall we transfer it to our own registrar? Once the domain is transferred to us, you will be paid out.',
                            rent_received: 'We have secured the rent fee for the period <strong>%{human_readable_period}</strong>. You will be paid out shortly.',
                            transaction_cancelled: 'The rental agreement you had with the rentee is canceled. The domain is relisted.',
                            transaction_closed: 'The rental agreement has been terminated. No new payments can be expected from the rentee. The domain is relisted.'
                        },
                        seller_offer_expired: 'Your offer has expired. You can send a new offer if you wish.',
                        seller_response_reminder: 'We have observed that you haven\u2019t responded to %{buyer} who is interested in your domain %{domain}. Please respond to this inquiry to increase your odds of selling the domain.',
                        transaction_cancelled: 'Unfortunately we have to cancel this transaction. Here are the details of the buyer: %{buyer} - %{buyer_email} - %{buyer_phone}',
                        transaction_closed: 'We just sent the payment of %{payout_amount}. This transaction is now closed. Again, congratulations and thank you for using %{brand}!',
                        transfer_failed: 'There\u2019s an issue with this domain transfer. I can\u2019t seem to be able to process it. I\u2019ve asked @simon to come and assist us with this transaction.',
                        transfer_failed_retry: 'Something went wrong. The transfer of the domain failed due to an unkown error. Please try again',
                        transfer_pending: 'The provided authorization code was correct. I\u2019ve initiated the transfer, which is currently pending.',
                        within_lock_period: 'The domain seems to have a transferlock and because of that currently can\u2019t transfer to another registrar. Our team will contact you to figure out the best way to transfer this domain to the buyer.'
                    },
                    offer_form: {
                        button: 'Add lead',
                        lead: 'Lead',
                        rent: 'Rent',
                        transaction: 'Transaction'
                    },
                    price_response_form: { button: 'Send price' },
                    sender: { you: 'You' },
                    subject: {
                        acceptance: 'Offer accepted',
                        account_change_initiated: 'Account change initiated',
                        agreement_reached: 'Agreement reached',
                        ask_auth_code: 'Domain authorization code',
                        ask_push_domain: 'Push domain at current registrar',
                        ask_push_or_transfer: 'Domain transfer',
                        ask_unlock_domain: 'Domain locked',
                        auth_code_given: 'Message',
                        auth_code_incorrect: 'Incorrect Authorization code',
                        auth_code_sent: 'Authorization code sent to buyer',
                        buy_in_installments: 'Buy now - Installments',
                        buy_now: 'Buy now',
                        buyer_offer_expired: 'Offer from buyer has expired',
                        confirm_transaction: 'Transaction confirmed',
                        counter_offer: 'Counter offer',
                        counter_offer_revoked: 'Counter offer revoked',
                        domain_transferred: 'Domain transferred',
                        init_escrow: 'Starting escrow',
                        installment_paid: 'Installment payment secured',
                        installment_payout_sent: 'Installment payout sent',
                        instruct_buyer_domain_transfer: 'Domain transfer initiated',
                        instruct_installment_dns_settings: 'Domain instructions sent',
                        instruct_rental_dns_settings: 'Domain instructions sent',
                        message: 'Message',
                        offer: 'New offer',
                        payment_received: 'Payment received',
                        payment_reminder: 'Payment reminder',
                        price_request: 'Price request',
                        price_response: 'Price sent',
                        rejection: 'Offer declined',
                        rents: {
                            first_rent_received: 'Rental price received',
                            message: 'Message',
                            rent_domain: 'Domain Rental Created',
                            rent_received: 'Rental price received',
                            transaction_cancelled: 'Rental Agreement Canceled',
                            transaction_closed: 'Rental agreement terminated'
                        },
                        seller_offer_expired: 'Your offer has expired',
                        seller_response_reminder: 'Response reminder',
                        transaction_cancelled: 'Transaction canceled',
                        transaction_closed: 'Transaction closed',
                        transfer_failed: 'Transfer on hold',
                        transfer_failed_retry: 'Transfer failed',
                        transfer_pending: 'Transfer in progress',
                        typing: 'DAN Bot is working',
                        within_lock_period: 'Domain locked'
                    }
                },
                paypal_payout_info: 'We will send the payout to your PayPal account: %{paypal_account}',
                title: {
                    default: 'Sales activity',
                    empty: 'Your offers and transactions will be displayed here'
                }
            },
            search: {
                empty: 'Sorry, there are no domains for your criteria.',
                'filter-bar': {
                    'ending-with': 'ending with:',
                    length: 'length:',
                    'no-hyphens': 'exclude: hyphens',
                    'no-numerals': 'exclude: numerals',
                    'no-unicode': 'exclude: special chars',
                    price: 'price:',
                    'starting-with': 'starting with:',
                    term: 'contains:',
                    to: 'to'
                },
                'filter-panel': {
                    'add-extension': 'add extension',
                    'ending-with': 'Ending with',
                    extensions: 'Extensions',
                    'name-patterns': 'Name',
                    'no-hyphens': 'No hyphens (-)',
                    'no-numerals': 'No numerals (0-9)',
                    'no-unicode': 'No special chars',
                    'starting-with': 'Starting with'
                },
                filters: {
                    buying_options: {
                        all: 'All',
                        installments: 'Installments',
                        rentals: 'Rentals'
                    },
                    tag: {
                        length: '%{min} to %{max} characters',
                        price: '%{min} to %{max} euros',
                        price_from: 'from %{min} euros'
                    }
                },
                results: {
                    button: {
                        buy_now: 'Buy now',
                        make_offer: 'Make offer',
                        more_info: 'More info',
                        place_bid: 'Place bid',
                        rent: 'Rent now'
                    },
                    pagination: {
                        'next-page': 'next',
                        'previous-page': 'previous'
                    }
                },
                sort: {
                    order: {
                        length: 'Length',
                        'length-asc': 'Length: short to long',
                        'length-desc': 'Length: long to short',
                        price: 'Price',
                        'price-asc': 'Price: low to high',
                        'price-desc': 'Price: high to low',
                        relevance: 'Relevance'
                    }
                },
                starting: 'Please enter some terms to search for',
                teaser: "Let's go, find your domain!"
            },
            seller_activation_mailer: {
                add_domains_to_account: {
                    body: "Yesterday you created an account on DAN.COM and we're really happy to have you on board!\n\nHowever, I see that you didn\u2019t add any domain names to your portfolio yet. If you need support adding your domains please contact our support.\n",
                    call_to_action: '[Add domains](%{url})',
                    note: 'Feel free to contact me directly if you need help or if you want to learn more about selling your domains.\n',
                    subject: 'Roll up your sleeves and get your hands dirty!'
                },
                add_domains_to_account_follow_up: {
                    body: 'Three days ago you created an account on DAN.COM but you didn\u2019t add any domain names to your portfolio yet.\n\nIf you need support adding your domains please contact our support.\n',
                    call_to_action: '[Add domains](%{url})',
                    note: 'Feel free to contact me directly if you need help or if you want to learn more about selling your domains.\n',
                    subject: 'Roll up your sleeves and get your hands dirty!'
                },
                setup_for_sale_pages: {
                    body: "We've noticed that you added domains to your portfolio but haven't setup your For Sale pages with us yet.\n\nWith our industry's best performing For Sale pages you can:\n\n- Sell significantly more domains\n- Rank your domains better in Google\n- Customize the for sale page to match your selling style and strategy\n\nAnd more! Feel free to Contact our support if you need help setting up our for sale pages!\n",
                    call_to_action: '[Setup your For Sale pages](%{url})',
                    subject: 'Your own For Sale pages'
                },
                setup_for_sale_pages_follow_up: {
                    body: "I was reviewing your account and observed that you haven't setup your for sale pages yet.\n\nThis feature is crucial to increase your sales ratio significantly. \n\nYou can check out an example page at [antiwet.com](http://antiwet.com). \n",
                    call_to_action: '[Setup your For Sale pages](%{url})',
                    subject: 'Complete your account'
                }
            },
            settings: {
                account: 'Account settings',
                address: 'Billing address',
                bank: 'Bank account',
                billing: 'Billing details',
                buy_options: 'Buying options',
                buyer_vat_rule: 'MOSS',
                company: 'Company details',
                contact: 'Contact details',
                display_name: 'Public name',
                domain: 'Domain name details',
                extra: 'Extra',
                for_sale: 'For Sale page',
                locale: 'Language',
                ownership: 'Ownership',
                payment: 'Payment details',
                preferred_payout_method: 'Preferred payout method',
                privacy: 'Privacy',
                profile: 'Seller profile',
                public_profile_privacy: 'Public profile',
                subscribed: 'Subscribed',
                vat_option: 'VAT Option'
            },
            suggestions: {
                search: {
                    subtitle: 'Search through millions of domains',
                    title: 'Looking for something else?'
                },
                subtitle: 'Here are some domains you may like',
                title: 'Get inspired'
            },
            support: {
                array: {
                    last_word_connector: ', and ',
                    two_words_connector: ' and ',
                    words_connector: ', '
                }
            },
            symbol: { arrow: { right: '\u2192' }, dash: '\u2015' },
            team: {
                advisor: {
                    christoph: 'Partner IBM Ventures',
                    hans: 'Serial entrepreneur, Online strategist',
                    kevin: 'Former CFO, Donuts / ICANN',
                    saskia: 'Head of Strategic planning, Philips'
                },
                founder: {
                    ali: 'Co-founder',
                    dominic: 'Co-founder',
                    reza: 'Founder / CEO'
                },
                investor: {
                    axivate: 'Private Equity Firm',
                    henri: 'Owner, mijndomein.nl',
                    paul: 'CEO, Reshift Digital',
                    rockstart: 'Startup Accelerator'
                }
            },
            time: {
                am: 'am',
                formats: {
                    default: '%a, %d %b %Y %I:%M:%S %p %Z',
                    long: '%B %d, %Y %I:%M %p',
                    short: '%d %b %I:%M %p'
                },
                pm: 'pm'
            },
            tooltip: {
                auctioned: 'Domain currently auctioned',
                business: 'Business',
                checkout: 'Checkout',
                conversations: 'Conversations',
                copy: 'Copy to clipboard',
                dan_id_description: 'We automatically sign and store a records of your transactions conducted at Dan on your behalf. This ID can be used when disputes arise and supporting data has to be extracted from the blockchain.',
                first_sale_of_client: 'First sale of client',
                imported_lead: 'Imported Lead',
                imported_transaction: 'Imported Transaction',
                individual: 'Consumer',
                installments: 'Installment plan available',
                invoice: 'Invoice',
                invoices: 'Invoices',
                recurring_revenue: 'This shows the compound monthly revenue of rents and installments',
                rent: 'Domain for rent',
                set_rent_fee: 'You need to set the rent fee first to be able to enable this feature.',
                toggle_locked_transaction_state: 'Toggle locked transaction state',
                unconfirmed_transaction: 'Unconfirmed transaction',
                vat_estimate: 'This is an estimate. The actual VAT price, if applicable, will be calculated at step 2 of checkout.'
            },
            user_lifecycle_mailer: {
                one_week: {
                    body: 'It\'s %{sender_name} again! Today we\'re going to look at how to price your domains in order to land you more sales.\n\n**Why pricing matters**\n\nBuyers don\'t like to be left in the dark. For some end-users having no fixed price is a barrier to transact with you. They want to know exactly how much your domain will cost them. Therefore it is advised to add buy-nows prices to your domains. Also, enable installments to make your domains more affordable for startups.\n\n**The right price for your domains**\n\nBuying and selling domain names is a matter of supply and demand, prices fluctuate based on the interest of buyers. Therefore, it\'s incredibly important to set realistic buy-now prices. Not sure how much you should ask? Simply, experiment once in a while with adjusted prices to see how the market responses. Use our bulk price editing tools to do this easily.\n\nHere are some of the factors that influence the value of your domains:\n\n- **Number of characters**: the shorter, the better\n- **Extension / language combination**: .com is by far the most valuable extension. However, it\'s better to use .com if you are using a term in the English language\n- **Dictionary words**: domains that include real words are more valuable\n- **Search volume**: if a lot of people are searching for this keyword on Google, then your domain has more value\n- **Type-in traffic**: do people type your domain directly into their browser? The more type-ins, the better!\n\n**Setting prices in your portfolio**\n\nLog in to your account and click "portfolio" in the menu bar on top. Here you see your list of all your domains. Click on the dotted gray line in the "buy now" or "starting offer" column, fill in your numbers and hit enter to save.\n\nThat\'s all for now. Thank you for your time!\n',
                    call_to_action: '[Set your prices](%{url})',
                    subject: 'How to price your domains'
                },
                three_weeks: {
                    body: "Today, we're going to discuss an important topic in the domaining industry: **Building trust**.\n\nBuilding trust with your buyers is very important. There are already plenty of barriers for novice end-users to acquire a domain from the secondary market. Let's work on removing some of those barriers by presenting yourself in a trustworthy way.\n\nBelow are some easy steps to gain more trust:\n\n- **Personalize your profile**: add a picture to your profile and set a background for example.\n- **Biography**: fill in your bio, tell something about yourself or your company. Why do you sell domains? What's your profession? etc.\n- **Real name**: use your real name or the name of your company.\n- **Negotiations**: talk with potential buyers instead of only shooting numbers to them. Try to reply as quickly as possible.\n\nRead more about building trust by clicking the button below.\n",
                    call_to_action: '[Build trust](%{url})',
                    note: 'If you have any question, just hit the reply button!',
                    subject: 'Building trust is key to selling more domains'
                },
                two_weeks: {
                    body: 'Promoting your domains is a perfect way to gain more interest and sell them faster!\n\n**For Sale pages**\n\nUsing our state of the art for sale pages is easy and effective. Buyers have all information they need to interact with you and can complete a purchase directly on your landing page.\n\n**Sharing your portfolio**\n\nThis can be highly effective when selling your domains to resellers.\nSharing your portfolio is simple, click on "Your name" in the top right corner and then click on the link "Your profile" to visit your own unique storefront. Hit one of the social media icons on the page and start sharing!\n\nWant to learn more about promoting your domains? See below:\n',
                    call_to_action: '[Learn more](%{url})',
                    subject: 'Start promoting your domains and sell faster!'
                },
                welcome: {
                    body: "Welcome on board! My name is %{sender_name} and I'm here to make sure you have a great experience with our platform.\n\nIn the next few weeks, I will be sending you a couple of emails to help you start selling your domains.\n\nCan't wait and want to start now? Read the tutorials on our blog.\n",
                    call_to_action: '[Read blog](%{url})',
                    note: 'Please do not hesitate to contact me if you need any help!',
                    subject: 'Welcome to DAN.COM'
                }
            },
            validation: {
                attributes: {
                    conversation: {
                        company_name_should_be_empty: 'company name should be empty when not a business',
                        transaction_state_is_locked: 'transaction state is locked and can not be changed'
                    },
                    default_starting_offer: {
                        lower_than_buy_now: 'must be less than or equal to the lowest buy now price of all your domains (%{price})'
                    },
                    display_name: {
                        not_consistent_with_name: 'must be consistent with domain name'
                    },
                    domain: {
                        does_not_belong_to_user: 'is not listed',
                        does_not_exist: 'does not exist',
                        in_excluded_list: "Please don\u2019t try to add domains you don't own",
                        is_already_sold: 'is already sold',
                        limit_imported: 'You have already imported a maximum of 3 leads for this domain today. Try again tomorrow.'
                    },
                    max_dimensions: {
                        height: 'Height can be at most %{height} pixels',
                        width: 'Width can be at most %{width} pixels'
                    },
                    min_dimensions: {
                        height: 'Height should be at least %{height} pixels',
                        width: 'Width should be at least %{width} pixels'
                    },
                    rent_fee: { no_decimals: "shouldn't include decimals" },
                    zipcode: { blank: 'is blank' }
                },
                form: {
                    contact: {
                        success: 'We have received your message and will contact you soon!'
                    }
                },
                model: {
                    conversation: {
                        turn: 'The counter offer has expired because the domain %{name} has already been sold'
                    },
                    message: {
                        starting_offer: '%{client} only takes offers into consideration from %{starting_offer} and above'
                    }
                }
            },
            welcome: {
                footer: {
                    about_us: 'About us',
                    auction: {
                        buttons: {
                            close: 'Close',
                            start_bidding: 'Start bidding!'
                        },
                        title: {
                            active: '<b>%{auction_title}</b> currently running! Take a look at the domains now.',
                            upcoming: '<b>%{auction_title}</b> coming soon! Take a look at the domains.'
                        }
                    },
                    blog: 'Blog',
                    buy_a_premium: 'Why buy a premium domain',
                    buy_domains: 'Buy domains',
                    buyer_guide: 'Domain buyer guide',
                    calculator: 'Commission calculator',
                    contact: 'Contact',
                    help_center: 'Help center',
                    home: 'Home',
                    how_escrow: 'How does domain escrow work?',
                    legal: 'Legal',
                    sell_domains: 'Sell domains',
                    seller_guide: 'Domain seller guide',
                    sitemap: 'Sitemap'
                },
                home: {
                    discovery: {
                        auction: {
                            button: 'Visit the auction now!',
                            subtitle: {
                                active: 'Take a look at the domains being auctioned on %{brand}',
                                upcoming: 'Take a look at the domains soon to be auctioned on %{brand}'
                            },
                            title: {
                                active: '%{auction_title} currently running!',
                                upcoming: '%{auction_title} coming soon!'
                            }
                        },
                        subtitle: 'Explore a fraction of our domain marketplace by theme and discover the domain name that fits your brand best.',
                        title: 'Get inspired'
                    },
                    hero: {
                        domain_sales: 'Domain sales',
                        header: 'Domains made available to all',
                        how_button: 'How does it work?',
                        inventory: 'Domain Inventory',
                        placeholder: 'What domain are you looking for?',
                        search: {
                            placeholder: 'Enter a keyword here to get started...'
                        },
                        subtitle: "Regardless of your budget or company size, we've got you covered.\nBuy, rent or lease the perfect domain directly from the owner.\n",
                        title: 'Find the perfect domain for your',
                        title_mobile: 'Domains for your',
                        transactions: 'Successfull transactions',
                        views: 'Marketplace Visits',
                        words: 'brand\nbusiness\nblog\n'
                    },
                    how_it_works: {
                        buy: {
                            body_html: 'All great domains are already registered, but not all are used or developed...\nThe good news is that millions of these domains are listed on our domain marketplace!\nDAN.COM allows you to buy domain names directly from their current owner.\n',
                            title: 'Buy domains from sellers around the globe'
                        },
                        'buy-from-owner': {
                            description: 'Of the 360 Million registered domains around 42% are unused. These are the domains that contain dictionary words, are brandable & or pronounceable. The good news is that most unused domains are actually for sale or can be rented!',
                            header: 'Buy from the owner',
                            title: 'Buy domains from sellers around the globe'
                        },
                        'get-domain-fast': {
                            description: 'We are here to make your life easier. 94% of all transactions are completed within 24 hours after payment. Due to our unique automated domain ownership transfer service, some transfers are even instant!',
                            header: 'Get your domain fast',
                            title: 'No more painful and expensive domain escrow'
                        },
                        'how-to-buy': {
                            description: 'Dan exclusively offers installed payment options to domain buyers. You can purchase a domain in full, on a monthly payment plan or in a lease to own setup. This way you could spread the total price over 3 years if you prefer that.',
                            header: 'Choose how to buy',
                            title: 'Buy, Rent or Lease a domain, you choose'
                        },
                        pay: {
                            body_html: 'Once you find a domain you like, simply review all options and proceed to checkout.\nYou can pay in full or in installments; there is absolutely no extra cost!\nSome sellers at DAN.COM will also accept renting or leasing their domains.\n',
                            title: 'Buy, Rent or Lease a domain, you choose'
                        },
                        title: 'Easy, fast and secure transactions',
                        transfer: {
                            body_html: "94% of all transactions are completed within 24 hours after payment.\nSome transfers are even instant since the introduction of <a href='https://blog.undeveloped.com/dan-project-update-52bd6053b860'>DAN!</a>\nDomain transfers used to take weeks. That is now a thing of the past!\n",
                            title: 'No more painful and expensive domain escrow'
                        }
                    },
                    market_place: {
                        added_today: 'Domains added today',
                        header: 'A glimpse into our domain marketplace',
                        just_missed: 'Domains you just missed',
                        seller: 'Seller',
                        sold: 'Sold',
                        visit_seller_profile: 'View profile'
                    },
                    our_mission: {
                        dan: {
                            description: 'Dan\u2019s blockchain is specifically designed to handle domain transactions and is originally launched in early 2019. By creating a new backend infrastructure to handle both simple and complex domain transactions & transfers, we\u2019re setting the path forward for our industry.',
                            title: 'Transactions powered by our own blockchain'
                        },
                        header: 'Our Mission',
                        open_api: {
                            description: 'The core technology powering our domain marketplace and all transactions will be offered to the rest of the world via a simple to use API. This way we want to ensure that our technology can be put to use so consumers can enjoy a safer, faster, more affordable & transparent domain transactions across the entire field.',
                            title: 'Open API'
                        }
                    },
                    popular_domains: {
                        leads: 'Leads',
                        subtitle: 'Based on amount of views or leads per week',
                        this_month: 'Views this month',
                        title: 'The most popular domains this week',
                        views: 'Views'
                    },
                    top_sellers: {
                        active_negotiations: 'Active Negotiations',
                        domains_listed: 'Domains Listed',
                        happy_customers: 'Happy customers',
                        month: 'This month',
                        subtitle: 'Browse a selection of our verified sellers',
                        title: 'Meet our sellers'
                    },
                    transactions: {
                        description: "We're the first in our field that has successfully used blockchain technology to create the most reliable, secure and efficient domain trading platform. Our technology results in a faster, less error-prone and above all, a better domain buying & selling experiences for all.\n\nAre you looking to verify a transaction? Check out our [DAN Explorer](https://explorer.dan.com).\n",
                        hash: 'Transaction Hash',
                        header: 'Cutting edge technology put to use to create the most transparent, secure & fast domain ownership transfer service.\n',
                        peers: 'Blocks',
                        time: 'Time',
                        transactions: 'Blockchain Transactions'
                    },
                    trust_and_safety: {
                        buyer_protection: {
                            body: 'We protect every transaction through a careful escrow process, leading to 100% successful acquisitions since 2014.',
                            title: 'Buyer Protection Program'
                        },
                        customer_support: {
                            body: 'Customers love our team! We are always available for you and respond to your chat or email 7 days a week.',
                            title: 'Best Customer Support'
                        },
                        header: 'Trust and safety',
                        safe_payment: {
                            body: 'Our partner Adyen processes all payments with professional-grade security so you never have to worry!',
                            title: 'Safe Payments by Adyen'
                        },
                        title: 'We keep you safe'
                    },
                    trust_pilot: {
                        header: 'What our customers have to say about us',
                        published: 'Published %{date}'
                    }
                },
                menu: {
                    about: 'About us',
                    auction: 'Auction',
                    blog: 'Blog',
                    contact: 'Contact',
                    disclaimer: 'Disclaimer',
                    help_center: 'Help center',
                    home: 'Home',
                    legal: 'Legal',
                    privacy: 'Privacy policy',
                    signin: 'Login',
                    signup: 'Sell domains',
                    terms: 'Terms of use'
                }
            },
            whois: {
                locked: 'Domain is locked',
                not_processed: 'Whois is not processed yet',
                transferable: 'Domain is transferable',
                unprocessable: 'Domain is unprocessable'
            },
            will_paginate: {
                next_label: 'Next &#8594;',
                page_entries_info: {
                    multi_page: 'Displaying %{model} %{from} - %{to} of %{count} in total',
                    multi_page_html: 'Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> in total',
                    single_page: {
                        one: 'Displaying 1 %{model}',
                        other: 'Displaying all %{count} %{model}',
                        zero: 'No %{model} found'
                    },
                    single_page_html: {
                        one: 'Displaying <b>1</b> %{model}',
                        other: 'Displaying <b>all&nbsp;%{count}</b> %{model}',
                        zero: 'No %{model} found'
                    }
                },
                page_gap: '&hellip;',
                previous_label: '&#8592; Previous'
            }
        }
    ));